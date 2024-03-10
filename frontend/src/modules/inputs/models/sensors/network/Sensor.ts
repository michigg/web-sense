import type { Sensor } from "@/modules/inputs/models/Sensor"
import { InputType } from "@/modules/inputs/models/inputType"
import { useNetwork } from '@vueuse/core'

export class NetworkSensor implements Sensor {
  public readonly key: InputType = InputType.NETWORK
  public readonly availableIconKey: string = "bi-router"
  public readonly unavailableIconKey: string = "bi-router"
  public readonly sensorPath = 'network'
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean

  constructor (isActive = false, isAvailable = false, isCalibrated = false) {
    this.isActive = isActive
    this.isAvailable = isAvailable
    this.isCalibrated = isCalibrated
  }

  checkAvailability (): Promise<void> {
    const { isSupported } = useNetwork()
    this.isAvailable = isSupported.value
    return Promise.resolve(undefined)
  }

  getPermission (): Promise<PermissionState> {
    return Promise.resolve("granted")
  }

  getNetwork () {
    return useNetwork()
  }

  clone (): Sensor {
    return new NetworkSensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
