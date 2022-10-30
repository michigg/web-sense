import type { Task } from "@/modules/tasks/models/task"
import type { TaskStepResult } from "@/modules/tasks/models/result"
import type { Point } from "@influxdata/influxdb-client-browser"
import type {
  IIDBLogTask,
  LogDBConvertable
} from "@/modules/log/models/logIDB"
import { LogTaskStep } from "@/modules/log/models/logTaskStep"
import type { InfluxDBConvertable } from "@/shared/composables/services/useInflux"
import type {
  TBPoint,
  ThingsboardConvertable
} from "@/shared/composables/services/useThingsBoard"
import { GeolocationData } from "@/modules/inputs/models/sensors/geolocation/geolocationData"

export class LogTask
  implements InfluxDBConvertable, ThingsboardConvertable, LogDBConvertable {
  readonly pKey?: number
  readonly id: number
  readonly title: string
  readonly checkInTimestamp: number
  readonly geolocation?: GeolocationData
  readonly steps: Array<LogTaskStep>
  readonly resultActivityComponentName: string | undefined
  readonly resultAggregationActivityComponentName: string | undefined
  transmitted: boolean

  constructor (
    pKey: number | undefined,
    id: number,
    title: string,
    checkInTimestamp: number,
    geolocation: GeolocationData | undefined,
    steps: Array<LogTaskStep>,
    resultActivityComponentName: string | undefined,
    resultAggregationActivityComponentName: string | undefined,
    transmitted = false
  ) {
    this.pKey = pKey
    this.id = id
    this.title = title
    this.steps = steps
    this.checkInTimestamp = checkInTimestamp
    this.geolocation = geolocation
    this.resultActivityComponentName = resultActivityComponentName
    this.resultAggregationActivityComponentName = resultAggregationActivityComponentName
    this.transmitted = transmitted
  }

  static fromResults (task: Task, stepsResults: Array<TaskStepResult>): LogTask {
    let geolocation
    const steps = []
    for (const [index, taskStep] of task.steps.entries()) {
      const stepsResult = stepsResults[index]
      geolocation = GeolocationData.fromTaskStepResult(stepsResult)

      stepsResult.results.map(result => result.metas.get)
      const logTaskStep = LogTaskStep.fromResults(taskStep, stepsResult)
      steps.push(logTaskStep)
    }

    return new LogTask(
      undefined,
      task.id,
      task.title,
      Date.now(),
      geolocation,
      steps,
      task.resultActivityComponentName,
      task.resultAggregationActivityComponentName
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
      GeolocationData.fromIDB(idbLog.geolocation),
      idbLog.steps.map((step) => LogTaskStep.fromIDB(step)),
      idbLog.resultActivityComponentName,
      idbLog.resultAggregationActivityComponentName,
      idbLog.transmitted
    )
  }

  toIDB (): IIDBLogTask {
    // TODO: refactor
    if (this.pKey === undefined) {
      return {
        id: this.id,
        title: this.title,
        checkInTimestamp: this.checkInTimestamp,
        geolocation: this.geolocation,
        steps: this.steps.map((step) => step.toIDB()),
        resultActivityComponentName: this.resultActivityComponentName,
        resultAggregationActivityComponentName: this.resultAggregationActivityComponentName,
        transmitted: this.transmitted
      }
    } else {
      return {
        pKey: this.pKey,
        id: this.id,
        title: this.title,
        checkInTimestamp: this.checkInTimestamp,
        geolocation: this.geolocation,
        steps: this.steps.map((step) => step.toIDB()),
        resultActivityComponentName: this.resultActivityComponentName,
        resultAggregationActivityComponentName: this.resultAggregationActivityComponentName,
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
      this.geolocation?.clone(),
      this.steps.map((step) => step.clone()),
      this.resultActivityComponentName,
      this.resultAggregationActivityComponentName
    )
  }
}
