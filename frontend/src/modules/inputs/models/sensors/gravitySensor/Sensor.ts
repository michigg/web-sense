import type {Sensor} from "@/modules/inputs/models/Sensor"
import {InputType} from "@/modules/inputs/models/inputType"
import {useGravitySensor} from "@/modules/inputs/models/sensors/gravitySensor/useGravitySensor"

const {
  key,
  availableIconKey,
  unavailableIconKey,
  sensorPath,
  isAvailable,
  currentSensorValue,
  getPermission,
  checkAvailability,
  start: gravitySensorStart,
  stop: gravitySensorStop,
  error
} = useGravitySensor()

export class WebSenseGravitySensor implements Sensor {
  public readonly key: InputType = key
  public readonly availableIconKey: string = availableIconKey
  public readonly unavailableIconKey: string = unavailableIconKey
  public readonly sensorPath = sensorPath
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean

  constructor(
    isActive = false,
    isAvailable = false,
    isCalibrated = false
  ) {
    this.isActive = isActive
    this.isAvailable = isAvailable
    this.isCalibrated = isCalibrated
  }

  async checkAvailability(): Promise<void> {
    await checkAvailability()
    this.isAvailable = isAvailable.value
    return Promise.resolve()
  }

  async getPermission(): Promise<PermissionState> {
    return Promise.resolve(await getPermission())
  }

  start(options?: { frequency: number}) {
    gravitySensorStart(options)
    return {
      currentSensorValue,
      error
    }
  }

  stop() {
    gravitySensorStop()
  }

  clone(): Sensor {
    return new WebSenseGravitySensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
