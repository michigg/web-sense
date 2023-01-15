/**
 * @author Michael Götz
 */

import { BaseError } from "@/shared/exceptions"
import type { Sensor } from "@/modules/inputs/models/Sensor"
import { SensorError } from "@/modules/inputs/exceptions"
import { InputType } from "@/modules/inputs/models/inputType"
import { useDeviceMotion } from "@vueuse/core"
import type { DeviceMotionOptions } from "@vueuse/core"
import { DeviceMotion } from "./deviceMotion"

export class DeviceMotionSensor implements Sensor {
  static META_KEY = "device-motion"
  readonly key: InputType = InputType.DEVICE_MOTION
  isAvailable: boolean
  isActive: boolean
  isCalibrated: boolean
  readonly availableIconKey: string = "bi-arrows-move"
  readonly unavailableIconKey: string = "bi-arrows-move"

  constructor (
    isAvailable = false,
    isActive = false,
    isCalibrated = false
  ) {
    this.isAvailable = isAvailable
    this.isActive = isActive
    this.isCalibrated = isCalibrated
  }

  async checkAvailability (): Promise<void> {
    this.isAvailable = typeof( DeviceMotionEvent ) !== "undefined"
    return Promise.resolve()
  }

  async getPermission (): Promise<PermissionState> {
    // The DeviceMotion API does not need user permmissions
    return "granted" as PermissionState
  }

  getMotionData (options: DeviceMotionOptions): DeviceMotion {
    this.isActive = true
    const {
      acceleration,
      accelerationIncludingGravity,
      rotationRate,
      interval,
    } = useDeviceMotion(options)

    return new DeviceMotion(
      acceleration,
      accelerationIncludingGravity,
      rotationRate,
      interval
    )
  }

  clone (): Sensor {
    return new DeviceMotionSensor(
      this.isAvailable,
      this.isActive,
      this.isCalibrated
    )
  }
}
