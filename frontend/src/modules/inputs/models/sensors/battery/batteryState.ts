import { LatLng } from "leaflet"
import type { TaskStepResult } from "@/modules/tasks/models/result"

export class BatteryState {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number

  constructor (
    charging: boolean,
    chargingTime: number,
    dischargingTime: number,
    level: number
  ) {
    this.charging = charging
    this.chargingTime = chargingTime
    this.dischargingTime = dischargingTime
    this.level = level
  }

  clone (): BatteryState {
    return new BatteryState(this.charging, this.chargingTime, this.dischargingTime, this.level)
  }
}
