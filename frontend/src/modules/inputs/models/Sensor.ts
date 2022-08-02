import type { InputType } from "@/modules/inputs/models/inputType"

export interface Sensor {
  readonly key: InputType
  readonly availableIconKey: string
  readonly unavailableIconKey: string
  isAvailable: boolean
  isActive: boolean
  isCalibrated: boolean

  checkAvailability (): Promise<void>

  getPermission (): Promise<PermissionState>

  clone (): Sensor
}
