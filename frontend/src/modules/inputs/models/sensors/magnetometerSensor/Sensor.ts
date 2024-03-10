import type {Sensor} from "@/modules/inputs/models/Sensor"
import {InputType} from "@/modules/inputs/models/inputType"
import {useMagnetometerSensor} from "@/modules/inputs/models/sensors/magnetometerSensor/useMagnetometerSensor"

const {
  key,
  availableIconKey,
  unavailableIconKey,
  sensorPath,
  isActive,
  isAvailable,
  isCalibrated,
  currentSensorValue,
  getPermission,
  checkAvailability,
  start,
  stop,
  error
} = useMagnetometerSensor()

export class WebSenseMagnetometerSensor implements Sensor {
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
    start(options)
    return {
      currentSensorValue,
      error
    }
  }

  stop() {
    stop()
  }

  clone(): Sensor {
    return new WebSenseMagnetometerSensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
