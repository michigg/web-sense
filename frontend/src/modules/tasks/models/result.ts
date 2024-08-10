import { toRaw } from "vue"
import type { TaskStep } from "@/modules/tasks/models/taskStep"
import type {Quaternion} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/Sensor"
import {ResultValueKey} from "@/modules/inputs/models/sensors/resultValueKeys"

export class Result {
  readonly measurements: Map<ResultValueKey, number | string | boolean | Quaternion>
  readonly metas: Map<ResultValueKey, number | string | boolean>

  constructor (
    metas = new Map<ResultValueKey, number | string | boolean>(),
    measurements = new Map<ResultValueKey, number | string | boolean | Quaternion>(),
    createdAt = Date.now()
  ) {
    this.metas = metas
    this.metas.set(ResultValueKey.CREATED_AT, createdAt)
    this.measurements = measurements
  }

  addMeta (key: ResultValueKey, value: number | string | boolean) {
    this.metas.set(key, value)
  }

  addMeasurement (key: ResultValueKey, value: number | string | boolean) {
    this.measurements.set(key, toRaw(value))
  }
}

export class TaskStepResult {
  readonly taskStep: TaskStep
  readonly results: Array<Result>
  readonly timestamp: number

  constructor (
    taskStep: TaskStep,
    results: Array<Result> = [],
    timestamp: number = Date.now()
  ) {
    this.taskStep = taskStep
    this.results = results
    this.timestamp = timestamp
  }
}
