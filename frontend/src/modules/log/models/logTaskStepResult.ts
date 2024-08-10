import type { Result } from "@/modules/tasks/models/result"
import { toRaw, unref } from "vue"
import type { IIDBLogTaskStepResult } from "@/modules/log/models/logIDB"
import type {ResultValueKey} from "@/modules/inputs/models/sensors/resultValueKeys"

export class LogTaskStepResult {
  readonly metas: Map<ResultValueKey, number | string | boolean>
  readonly measurements: Map<ResultValueKey, number | string | boolean>

  constructor (
    metas: Map<ResultValueKey, number | string | boolean>,
    measurements: Map<ResultValueKey, number | string | boolean>
  ) {
    this.metas = metas
    this.measurements = measurements
  }

  static fromTaskResult (taskResult: Result) {
    const unwrappedMetas = new Map<ResultValueKey, number | string | boolean>()
    for (const [key, value] of taskResult.metas) {
      unwrappedMetas.set(key, toRaw(unref(value)))
    }

    const unwrappedMeasurements = new Map<ResultValueKey, number | string | boolean>()
    for (const [key, value] of taskResult.measurements) {
      toRaw(unref(value))
      unwrappedMeasurements.set(key, toRaw(unref(value)))
    }
    return new LogTaskStepResult(unwrappedMetas, unwrappedMeasurements)
  }

  static fromIDB (idbResult: IIDBLogTaskStepResult): LogTaskStepResult {
    return new LogTaskStepResult(idbResult.metas, idbResult.measurements)
  }

  toIDB (): IIDBLogTaskStepResult {
    return {
      metas: toRaw(this.metas),
      measurements: toRaw(this.measurements)
    }
  }

  clone (): LogTaskStepResult {
    return new LogTaskStepResult(
      new Map<string, number | string | boolean>(this.metas),
      new Map<string, number | string | boolean>(this.measurements)
    )
  }
}
