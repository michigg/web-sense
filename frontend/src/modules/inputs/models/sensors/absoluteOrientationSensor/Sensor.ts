import type {Sensor} from "@/modules/inputs/models/Sensor"
import {InputType} from "@/modules/inputs/models/inputType"
import {
  type OrientationSensorOptions,
  useAbsoluteOrientationSensor
} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/useAbsoluteOrientationSensor"

const {
  key,
  availableIconKey,
  unavailableIconKey,
  sensorPath,
  isAvailable,
  currentSensorValue,
  getPermission,
  checkAvailability,
  start,
  stop,
  error
} = useAbsoluteOrientationSensor()

export class WebSenseAbsoluteOrientationSensor implements Sensor {
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

  start(options?: OrientationSensorOptions) {
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
    return new WebSenseAbsoluteOrientationSensor(this.isActive, this.isAvailable, this.isCalibrated)
  }
}
