import { DBSchema, IDBPDatabase, openDB } from 'idb'

interface ITaskState {
  id: number
  approved: boolean
}

const DATABASE_KEY = 'crowd_sensing_app_tasks'
const STORE_KEY = 'tasks'

interface TaskDB extends DBSchema {
  [STORE_KEY]: {
    value: ITaskState
    key: number
  }
}

export const taskDB = {
  async getDB (): Promise<IDBPDatabase<TaskDB>> {
    return await openDB<TaskDB>(DATABASE_KEY, 1, {
      upgrade (db) {
        db.createObjectStore(STORE_KEY, {
          keyPath: 'id'
        })
      }
    })
  },
  async addTaskOrUpdate (taskState: ITaskState): Promise<number> {
    const db = await this.getDB()
    try {
      await db.delete(STORE_KEY, taskState.id)
    } catch (e) {
      console.log(e)
    }
    // uses structured clone. The following site shows cloneable types https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    return await db.put(STORE_KEY, taskState)
  },
  async getTask (id: number): Promise<ITaskState | undefined> {
    const db = await this.getDB()
    return await db.get(STORE_KEY, id)
  }
}
