import type {Sensor} from "@/modules/inputs/models/Sensor"
import {InputType} from "@/modules/inputs/models/inputType"
import {useDeviceMotion} from '@vueuse/core'

export class DeviceMotionSensor implements Sensor {
  public readonly key: InputType = InputType.DEVICE_MOTION
  public readonly availableIconKey: string = "bi-phone-flip"
  public readonly unavailableIconKey: string = "bi-phone-flip"
  public readonly sensorPath = 'deviceMotion'
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean

  constructor(isActive = false, isAvailable = false, isCalibrated = false) {
    this.isActive = isActive
    this.isAvailable = isAvailable
    this.isCalibrated = isCalibrated
  }

  checkAvailability(): Promise<void> {
    const {interval} = useDeviceMotion()
    this.isAvailable = interval.value > 0
    return Promise.resolve(undefined)
  }

  getPermission(): Promise<PermissionState> {
    return Promise.resolve("granted")
  }

  getDeviceMotion() {
    return useDeviceMotion()
  }

  clone(): Sensor {
    return new DeviceMotionSensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
