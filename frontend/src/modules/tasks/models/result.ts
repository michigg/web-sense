import { toRaw } from "vue"
import type { TaskStep } from "@/modules/tasks/models/taskStep"

export class Result {
  readonly measurements: Map<string, number | string | boolean>
  readonly metas: Map<string, number | string | boolean>

  constructor (
    metas = new Map<string, number | string | boolean>(),
    measurements = new Map<string, number | string | boolean>()
  ) {
    this.metas = metas
    this.measurements = measurements
  }

  addMeta (key: string, value: number | string | boolean) {
    this.metas.set(key, value)
  }

  addMeasurement (key: string, value: number | string | boolean) {
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
