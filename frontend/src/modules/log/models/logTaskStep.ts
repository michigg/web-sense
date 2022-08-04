import { toRaw } from "vue"
import type { TaskStepResult } from "@/modules/tasks/models/result"
import type { IIDBLogTaskStep } from "@/modules/log/models/logIDB"
import { LogTaskStepResult } from "@/modules/log/models/logTaskStepResult"
import { Point } from "@influxdata/influxdb-client-browser"
import type { TaskStep } from "@/modules/tasks/models/taskStep"
import type { InputType } from "@/modules/inputs/models/inputType"
import type { TBPoint } from "@/shared/composables/services/useThingsBoard"

export class LogTaskStep {
  readonly id: string
  readonly title: string
  readonly timestamp: number
  readonly inputTypes: Array<InputType>
  readonly results: Array<LogTaskStepResult>
  readonly resultActivityComponentName?: string

  constructor (
    id: string,
    title: string,
    timestamp: number,
    inputTypes: Array<InputType>,
    results: Array<LogTaskStepResult>,
    resultActivityComponentName?: string
  ) {
    this.id = id
    this.title = title
    this.timestamp = toRaw(timestamp)
    this.inputTypes = toRaw(inputTypes)
    this.results = results
    this.resultActivityComponentName = resultActivityComponentName
  }

  static fromResults (
    taskStep: TaskStep,
    taskStepResult: TaskStepResult
  ): LogTaskStep {
    return new LogTaskStep(
      taskStepResult.taskStep.id,
      taskStepResult.taskStep.title,
      taskStepResult.timestamp,
      taskStepResult.taskStep.inputTypes,
      taskStepResult.results.map((result) =>
        LogTaskStepResult.fromTaskResult(result)
      ),
      taskStep.resultActivityComponentName
    )
  }

  static fromIDB (idbLogTaskStep: IIDBLogTaskStep): LogTaskStep {
    return new LogTaskStep(
      idbLogTaskStep.id,
      idbLogTaskStep.title,
      idbLogTaskStep.timestamp,
      idbLogTaskStep.inputTypes,
      idbLogTaskStep.results.map((result) => LogTaskStepResult.fromIDB(result)),
      idbLogTaskStep.resultActivityComponentName
    )
  }

  toIDB (): IIDBLogTaskStep {
    return {
      id: this.id,
      title: this.title,
      timestamp: this.timestamp,
      inputTypes: toRaw(this.inputTypes),
      results: this.results.map((result) => result.toIDB()),
      resultActivityComponentName: this.resultActivityComponentName
    }
  }

  toInfluxPoints (taskId: string): Array<Point> {
    const points = []
    for (const taskStepResult of this.results) {
      const point = new Point(`task_${taskId}_step_${this.id.toString()}`)
        .tag("taskId", taskId)
        .tag("taskStepId", this.id.toString())
        .timestamp(this.timestamp)
      for (const [key, value] of taskStepResult.metas) {
        point.tag(key, value.toString())
      }
      for (const [key, value] of taskStepResult.measurements) {
        switch (typeof value) {
          case "number":
            point.floatField(key, value)
            // if (key === 'accuracy') {
            //   point.floatField(key, value)
            //   break
            // }
            // if (Number.isInteger(value)) {
            //   point.intField(key, value)
            // } else {
            //   point.floatField(key, value)
            // }
            break
          case "string":
            point.stringField(key, value)
            break
          case "boolean":
            point.booleanField(key, value)
            break
          case "bigint":
            point.intField(key, value)
            break
          default:
            throw Error(`not supported type ${typeof value}`)
        }
      }
      points.push(point)
    }
    return points
  }

  toTBTelemetries (taskId: string): Array<TBPoint> {
    const telemetries: Array<TBPoint> = []
    for (const taskStepResult of this.results) {
      const telemetry = {
        ts: this.timestamp,
        values: {} as { [p: string]: number | string | boolean }
      }
      telemetry.values.taskId = taskId
      telemetry.values.taskStepId = this.id
      for (const [key, value] of taskStepResult.metas) {
        telemetry.values[key] = value.toString()
      }
      for (const [key, value] of taskStepResult.measurements) {
        telemetry.values[key] = value
      }
      telemetries.push(telemetry)
    }
    return telemetries
  }

  clone (): LogTaskStep {
    return new LogTaskStep(
      this.id,
      this.title,
      this.timestamp,
      this.inputTypes,
      this.results.map((result) => result.clone())
    )
  }
}
