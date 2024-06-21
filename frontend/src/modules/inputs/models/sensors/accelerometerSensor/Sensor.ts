import type {Sensor} from "@/modules/inputs/models/Sensor"
import {InputType} from "@/modules/inputs/models/inputType"
import {useAccelerometerSensor} from "@/modules/inputs/models/sensors/accelerometerSensor/useAccelerometerSensor"

const {
  key,
  availableIconKey,
  unavailableIconKey,
  sensorPath,
  isAvailable,
  currentSensorValue,
  getPermission,
  checkAvailability,
  start: accelerometerSensorStart,
  stop: accelerometerSensorStop,
  error
} = useAccelerometerSensor()

export class WebSenseAccelerometerSensor implements Sensor {
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
    accelerometerSensorStart(options)
    return {
      currentSensorValue,
      error
    }
  }

  stop() {
    accelerometerSensorStop()
  }

  clone(): Sensor {
    return new WebSenseAccelerometerSensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
