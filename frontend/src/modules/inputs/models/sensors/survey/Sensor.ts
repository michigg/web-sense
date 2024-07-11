import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"

export class SurveySensor extends AbstractSensor<never, never, never> {
  constructor() {
    super(
      InputType.SURVEY,
      'bi-list-check',
      'survey',
      []
    )
  }

  _getAvailability(): Promise<boolean> {
    return Promise.resolve(true)
  }

  _startSensor(_: never): Promise<void> {
    return Promise.resolve()
  }

  _stopSensor(): Promise<void> {
    return Promise.resolve()
  }
}
