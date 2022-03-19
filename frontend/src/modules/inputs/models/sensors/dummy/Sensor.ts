import { Sensor } from '@/modules/inputs/models/Sensor'
import { InputType } from '@/modules/inputs/models/inputType'

export class DummySensor implements Sensor {
  public readonly key: InputType = InputType.DUMMY
  public readonly availableIconKey: string = 'bi-camera'
  public readonly unavailableIconKey: string = 'bi-camera'
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean

  constructor (
    isActive = false,
    isAvailable = false,
    isCalibrated = false
  ) {
    this.isActive = isActive
    this.isAvailable = isAvailable
    this.isCalibrated = isCalibrated
  }

  checkAvailability (): Promise<void> {
    this.isAvailable = false
    return Promise.resolve(undefined)
  }

  getPermission (): Promise<PermissionState> {
    return Promise.resolve('denied')
  }

  clone (): Sensor {
    return new DummySensor(
      this.isActive,
      this.isAvailable,
      this.isCalibrated
    )
  }
}
