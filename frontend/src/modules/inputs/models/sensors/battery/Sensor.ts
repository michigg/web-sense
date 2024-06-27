import type { Sensor } from "@/modules/inputs/models/Sensor"
import { InputType } from "@/modules/inputs/models/inputType"
import { useBattery } from '@vueuse/core'

export class BatterySensor implements Sensor {
  public readonly key: InputType = InputType.BATTERY
  public readonly availableIconKey: string = "bi-battery-full"
  public readonly unavailableIconKey: string = "bi-battery-full"
  public readonly sensorPath = 'battery'
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean

  constructor (isActive = false, isAvailable = false, isCalibrated = false) {
    this.isActive = isActive
    this.isAvailable = isAvailable
    this.isCalibrated = isCalibrated
  }

  checkAvailability (): Promise<void> {
    const { isSupported } = useBattery()
    this.isAvailable = isSupported.value
    return Promise.resolve(undefined)
  }

  getPermission (): Promise<PermissionState> {
    return Promise.resolve("granted")
  }

  getBattery () {
    return useBattery()
  }

  clone (): Sensor {
    return new BatterySensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
