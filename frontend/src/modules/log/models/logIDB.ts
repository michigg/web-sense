import { openDB } from "idb"
import type { DBSchema, IDBPDatabase } from "idb"
import type { InputType } from "@/modules/inputs/models/inputType"
import type { GeolocationData } from "@/modules/inputs/models/sensors/geolocation/geolocationData"

export interface IIDBLogTaskStepResult {
  readonly metas: Map<string, number | string | boolean>
  readonly measurements: Map<string, number | string | boolean>
}

export interface IIDBLogTaskStep {
  readonly id: string
  readonly title: string
  readonly timestamp: number
  readonly inputTypes: Array<InputType>
  readonly results: Array<IIDBLogTaskStepResult>
  readonly resultActivityComponentName: string | undefined
}

export interface IIDBLogTask {
  readonly pKey?: number
  readonly id: number
  readonly title: string
  readonly checkInTimestamp: number
  readonly geolocation: GeolocationData | undefined
  readonly steps: Array<IIDBLogTaskStep>
  readonly resultActivityComponentName: string | undefined
  readonly resultAggregationActivityComponentName: string | undefined
  transmitted: boolean
}

export interface LogDBConvertable {
  toIDB (): IIDBLogTask
}

interface LogDB extends DBSchema {
  logs: {
    value: IIDBLogTask
    key: number
    indexes: {
      checkInTimestamp: number
      byTask: number
    }
  }
}

const DATABASE_KEY = "crowd_sensing_app_logs"
const LOGS_STORE_KEY = "logs"

export const logDB = {
  async getLogDB (): Promise<IDBPDatabase<LogDB>> {
    return await openDB<LogDB>(DATABASE_KEY, 2, {
      async upgrade (db, oldVersion, newVersion, transaction) {
        if (oldVersion < 1) {
          const logStore = db.createObjectStore(LOGS_STORE_KEY, {
            keyPath: "pKey",
            autoIncrement: true
          })
          logStore.createIndex("checkInTimestamp", "checkInTimestamp")
          logStore.createIndex("byTask", "id")
        }
        if (oldVersion < 2) {
          const logStore = transaction.objectStore(LOGS_STORE_KEY)
          const logTasks = await logStore.getAll()
          for (const logTask of logTasks) {
            logTask.transmitted = true
            await logStore.put(logTask)
          }
        }
      }
    })
  },
  async putTaskLog (logTask: IIDBLogTask): Promise<IIDBLogTask> {
    const db = await this.getLogDB()
    // uses structured clone. The following site shows cloneable types https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    const pKey = await db.put(LOGS_STORE_KEY, logTask)
    return {
      pKey,
      id: logTask.id,
      title: logTask.title,
      checkInTimestamp: logTask.checkInTimestamp,
      geolocation: logTask.geolocation,
      steps: logTask.steps,
      resultActivityComponentName: logTask.resultActivityComponentName,
      resultAggregationActivityComponentName: logTask.resultAggregationActivityComponentName,
      transmitted: logTask.transmitted
    }
  },
  async getTaskLogs (taskId?: number): Promise<Array<IIDBLogTask>> {
    const db = await this.getLogDB()
    if (!taskId) {
      const logs = await db.getAllFromIndex(LOGS_STORE_KEY, "checkInTimestamp")
      return logs.reverse()
    }
    const logs = await db.getAllFromIndex(LOGS_STORE_KEY, 'byTask', taskId)
    return logs.reverse()
  },
  async getTaskLog (pKey: number): Promise<IIDBLogTask | undefined> {
    const db = await this.getLogDB()
    return await db.get(LOGS_STORE_KEY, pKey)
  },
  async deleteTaskLog (pKey: number): Promise<void> {
    const db = await this.getLogDB()
    return await db.delete(LOGS_STORE_KEY, pKey)
  }
}
