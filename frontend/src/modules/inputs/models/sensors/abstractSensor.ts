import {computed, type Ref, ref} from "vue"
import type {InputType} from "@/modules/inputs/models/inputType"

export type AbstractSensorType = AbstractSensor<unknown, unknown, unknown>
export abstract class AbstractSensor<SensorType, SensorDataType, SensorOptionsType> {
  readonly key: InputType
  readonly iconKey: string // boostrap icons
  readonly sensorPath: string // path postfix to the sensor folder. Starting from /src/modules/inputs/models/sensors/<sensorPath>
  readonly permissionNames: PermissionName[]
  readonly isAvailable: Ref<boolean>
  readonly isActive: Ref<boolean>
  readonly isCalibrated: Ref<boolean>
  readonly sensor = ref<SensorType | undefined>()
  readonly currentSensorValue = ref<SensorDataType>()
  readonly lastReadingDate = ref<Date>(new Date(0))
  readonly error = ref<Error | undefined>()
  readonly hasReading = computed<boolean>(() => !!this.currentSensorValue.value)

  constructor(
    key: InputType,
    iconKey: string,
    sensorPath: string,
    permissionNames: PermissionName[],
    isAvailable: Ref<boolean> = ref(false),
    isActive: Ref<boolean> = ref(false),
    isCalibrated: Ref<boolean> = ref(false)
  ) {
    this.key = key
    this.iconKey = iconKey
    this.sensorPath = sensorPath
    this.permissionNames = permissionNames
    this.isAvailable = isAvailable
    this.isActive = isActive
    this.isCalibrated = isCalibrated
  }

  abstract _getAvailability(): Promise<boolean>

  async checkAvailability(): Promise<void> {
    this.isAvailable.value = await this._getAvailability()
  }

  async queryPermissions(): Promise<PermissionState> {
    this.logDebug('Request permissions')
    const permissionStatuses = await Promise.all(
      this.permissionNames.map((permissionName) => navigator.permissions.query({name: permissionName}))
    )
    const permissionGranted = permissionStatuses.every((value) => value.state === 'granted')
    const permissionState = permissionGranted ? 'granted' : 'denied'
    this.logDebug(`Permissions: ${permissionState}`)
    return Promise.resolve(permissionState)
  }

  abstract _stopSensor(): Promise<void>

  async stop() {
    if (!this.sensor.value) {
      this.logWarn('No sensor to stop found!')
      // Nothing to do
      this.isActive.value = false
      return
    }
    this.logDebug('Active sensor found! Stop sensor...')
    try {
      await this._stopSensor()
      this.sensor.value = undefined
      this.isActive.value = false
      this.logDebug('Sensor stopped')
    } catch (e) {
      this.logError('Sensor cannot be stopped', e)
    }
  }

  abstract _startSensor(options?: SensorOptionsType): Promise<void>

  async start(options?: SensorOptionsType) {
    const permissionState = await this.queryPermissions()
    if (permissionState !== 'granted') {
      throw new Error('Sensor kann aufgrund fehlender Berechtigung nicht gestartet werden. Bitte erteilen Sie die Berechtigung.')
    }
    if (this.sensor.value) {
      await this.stop()
    }
    this.logDebug('Starting sensor...')
    try {
      await this._startSensor(options)
      this.isActive.value = true
      this.logDebug('Sensor started')
    } catch (e) {
      this.logError('Sensor cannot be started', e)
    }
  }

  logError(msg: string, e?: unknown): void {
    console.error(`[Sensor]:[${this.key}]: ${msg}`, e)
  }

  logWarn(msg: string, e?: unknown): void {
    console.warn(`[Sensor]:[${this.key}]: ${msg}`, e)
  }

  logDebug(msg: string): void {
    console.debug(`[Sensor]:[${this.key}]: ${msg}`)
  }
}
