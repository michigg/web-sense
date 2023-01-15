/**
 * @author Michael Götz
 */

import { BaseError } from "@/shared/exceptions"
import type { Sensor } from "@/modules/inputs/models/Sensor"
import { SensorError } from "@/modules/inputs/exceptions"
import { InputType } from "@/modules/inputs/models/inputType"
import { useBattery } from "@vueuse/core"
import { BatteryState } from "./batteryState"

export class BatterySensor implements Sensor {
  static META_KEY = "battery"
  readonly key: InputType = InputType.BATTERY
  isAvailable: boolean
  isActive: boolean
  isCalibrated: boolean
  readonly availableIconKey: string = "bi-battery"
  readonly unavailableIconKey: string = "bi-battery"

  constructor (
    isAvailable = false,
    isActive = false,
    isCalibrated = true
  ) {
    this.isAvailable = isAvailable
    this.isActive = isActive
    this.isCalibrated = isCalibrated
  }

  async checkAvailability (): Promise<void> {
    const { isSupported } = useBattery()
    this.isAvailable = isSupported.value
    console.log(await this.getBatteryState())
    return Promise.resolve()
  }

  async getPermission (): Promise<PermissionState> {
    // The Battery API does not need user permmissions
    return "granted" as PermissionState
  }

  async getBatteryState (): Promise<BatteryState> {
    this.isActive = true
    const { charging, chargingTime, dischargingTime, level } = useBattery()
    this.isActive = false
    return new BatteryState(
      charging.value,
      chargingTime.value,
      dischargingTime.value,
      level.value
    )
  }

  clone (): Sensor {
    return new BatterySensor(
      this.isAvailable,
      this.isActive,
      this.isCalibrated
    )
  }
}
