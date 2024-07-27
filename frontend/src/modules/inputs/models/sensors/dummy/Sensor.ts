import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"

export class DummySensor extends AbstractSensor<never, never, never> {
  constructor() {
    super(
      InputType.DUMMY,
      'bi-camera',
      'dummy',
      []
    )
  }

  _getAvailability(): Promise<boolean> {
    return Promise.resolve(false)
  }

  _startSensor(): Promise<void> {
    return Promise.reject(new Error("DummySensor not implemented"))
  }

  _stopSensor(): Promise<void> {
    return Promise.reject(new Error("DummySensor not implemented"))
  }
}
