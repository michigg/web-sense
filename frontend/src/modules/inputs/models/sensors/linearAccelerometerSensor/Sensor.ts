import type {Sensor} from "@/modules/inputs/models/Sensor"
import {InputType} from "@/modules/inputs/models/inputType"
import {
  useLinearAccelerationSensor
} from "@/modules/inputs/models/sensors/linearAccelerometerSensor/useLinearAccelerationSensor"

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
  start: linearAccelerationSensorStart,
  stop: linearAccelerationSensorStop,
  error
} = useLinearAccelerationSensor()

export class WebSenseLinearAccelerationSensor implements Sensor {
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
    linearAccelerationSensorStart(options)
    return {
      currentSensorValue,
      error
    }
  }

  stop() {
    linearAccelerationSensorStop()
  }

  clone(): Sensor {
    return new WebSenseLinearAccelerationSensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
