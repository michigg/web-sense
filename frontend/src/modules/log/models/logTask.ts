import { Task } from '@/modules/tasks/models/task'
import { TaskStepResult } from '@/modules/tasks/models/result'
import { Point } from '@influxdata/influxdb-client-browser'
import {
  IIDBLogTask,
  LogDBConvertable
} from '@/modules/log/models/logIDB'
import { LogTaskStep } from '@/modules/log/models/logTaskStep'
import { InfluxDBConvertable } from '@/shared/composables/services/useInflux'
import { TBPoint, ThingsboardConvertable } from '@/shared/composables/services/useThingsBoard'

export class LogTask implements InfluxDBConvertable, ThingsboardConvertable, LogDBConvertable {
  readonly pKey?: number
  readonly id: number
  readonly title: string
  readonly checkInTimestamp: number
  readonly steps: Array<LogTaskStep>
  readonly resultActivityComponentName: string | undefined
  transmitted: boolean

  constructor (
    pKey: number | undefined,
    id: number,
    title: string,
    checkInTimestamp: number,
    steps: Array<LogTaskStep>,
    resultActivityComponentName: string | undefined,
    transmitted = false
  ) {
    this.pKey = pKey
    this.id = id
    this.title = title
    this.steps = steps
    this.checkInTimestamp = checkInTimestamp
    this.resultActivityComponentName = resultActivityComponentName
    this.transmitted = transmitted
  }

  static fromResults (task: Task, stepsResults: Array<TaskStepResult>): LogTask {
    const steps = []

    for (const [index, taskStep] of task.steps.entries()) {
      const stepsResult = stepsResults[index]
      steps.push(LogTaskStep.fromResults(taskStep, stepsResult))
    }

    return new LogTask(
      undefined,
      task.id,
      task.title,
      Date.now(),
      steps,
      task.resultActivityComponentName
    )
  }

  static fromIDB (idbLog: IIDBLogTask | undefined): LogTask | undefined {
    if (!idbLog) {
      return undefined
    }
    return new LogTask(
      idbLog.pKey,
      idbLog.id,
      idbLog.title,
      idbLog.checkInTimestamp,
      idbLog.steps.map(step => LogTaskStep.fromIDB(step)),
      idbLog.resultActivityComponentName,
      idbLog.transmitted
    )
  }

  toIDB (): IIDBLogTask {
    // TODO: refractor
    if (this.pKey === undefined) {
      return {
        id: this.id,
        title: this.title,
        checkInTimestamp: this.checkInTimestamp,
        steps: this.steps.map((step) => step.toIDB()),
        resultActivityComponentName: this.resultActivityComponentName,
        transmitted: this.transmitted
      }
    } else {
      return {
        pKey: this.pKey,
        id: this.id,
        title: this.title,
        checkInTimestamp: this.checkInTimestamp,
        steps: this.steps.map((step) => step.toIDB()),
        resultActivityComponentName: this.resultActivityComponentName,
        transmitted: this.transmitted
      }
    }
  }

  toInfluxPoints (): Array<Point> {
    const points: Array<Point> = []
    for (const taskStep of this.steps) {
      const taskStepPoints = taskStep.toInfluxPoints(this.id.toString())
      points.push(...taskStepPoints)
    }
    return points
  }

  toTBTelemetries (): Array<TBPoint> {
    const telemetries: Array<TBPoint> = []
    for (const taskStep of this.steps) {
      const taskStepPoints = taskStep.toTBTelemetries(this.id.toString())
      telemetries.push(...taskStepPoints)
    }
    return telemetries
  }

  clone (): LogTask {
    return new LogTask(
      this.pKey,
      this.id,
      this.title,
      this.checkInTimestamp,
      this.steps.map(step => step.clone()),
      this.resultActivityComponentName
    )
  }
}
