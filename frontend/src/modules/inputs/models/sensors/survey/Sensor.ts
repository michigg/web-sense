import { Sensor } from '@/modules/inputs/models/Sensor'
import { InputType } from '@/modules/inputs/models/inputType'

export class SurveySensor implements Sensor {
  public readonly key: InputType = InputType.SURVEY
  public readonly availableIconKey: string = 'bi-list-check'
  public readonly unavailableIconKey: string = 'bi-list-check'
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean

  constructor (
    isActive = false,
    isAvailable = true,
    isCalibrated = true
  ) {
    this.isActive = isActive
    this.isAvailable = isAvailable
    this.isCalibrated = isCalibrated
  }

  checkAvailability (): Promise<void> {
    this.isAvailable = true
    return Promise.resolve(undefined)
  }

  getPermission (): Promise<PermissionState> {
    return Promise.resolve('granted')
  }

  clone (): Sensor {
    return new SurveySensor(
      this.isActive,
      this.isAvailable,
      this.isCalibrated
    )
  }
}
