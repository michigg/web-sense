import {InputType} from "@/modules/inputs/models/inputType"
import {readonly, ref} from "vue"
import { RelativeOrientationSensor } from "motion-sensors-polyfill/src/motion-sensors"

type OrientationSensorLocalCoordinateSystem = "device" | "screen";
export interface OrientationSensorOptions {
  frequency?: number | undefined;
  referenceFrame?: OrientationSensorLocalCoordinateSystem | undefined; // defaults to "device"
}

export type Quaternion  = [number, number, number, number]

const INPUT_TYPE_KEY: InputType = InputType.RELATIVE_ORIENTATION
const AVAILABLE_ICON_KEY: string = 'bi-phone-flip'
const UNAVAILABLE_ICON_KEY: string = 'bi-phone-flip'
const SENSOR_PATH: string = 'relativeOrientationSensor'
const isActive = ref(false)
const isAvailable = ref(false)
const isCalibrated = ref(false)
const sensor = ref<RelativeOrientationSensor | undefined>()
const currentSensorValue = ref<Quaternion>()
const error = ref<Error | undefined>()

export function useRelativeOrientationSensor() {
  const checkAvailability = (): Promise<void> => {
    if (!("RelativeOrientationSensor" in window)) {
      isAvailable.value = false
      return Promise.resolve()
    }
    try {
      new RelativeOrientationSensor();
      isAvailable.value = true
    } catch (error) {
      isAvailable.value = false
      if (!(error instanceof Error)) {
        console.error('Unknown error', error)
        return Promise.resolve()
      }
      if (error.name === "ReferenceError") {
        console.error("Sensor is not supported by the User Agent.");
      }
      return Promise.resolve()
    }
    return Promise.resolve()
  }

  const getPermission = async (): Promise<PermissionState> => {
    const permissionStatuses = await Promise.all([
      // Need to fix types here cause typescript lacks of new permission values
      navigator.permissions.query({ name: "accelerometer" as PermissionName }) ,
      navigator.permissions.query({ name: "gyroscope" as PermissionName }),
    ])
    const permissionGranted = permissionStatuses.every((value) => value.state === 'granted')
    return Promise.resolve(permissionGranted ? 'granted' : 'denied')
  }

  const start = async (options?: OrientationSensorOptions) => {
    const permissionState = await getPermission()
    if (permissionState !== 'granted') {
      throw new Error('Orientierungssensor kann aufgrund fehlender Berechtigung nicht gestartet werden. Bitte erteilen Sie die Berechtigung.')
    }
    if (sensor.value) {
      stop()
    }
    console.info('options', options)
    sensor.value = new RelativeOrientationSensor(options)
    console.log( sensor.value)
    sensor.value.onreading = () => {
      console.log('reading')
      currentSensorValue.value = sensor.value?.quaternion
    };
    sensor.value.onerror = (event: Event) => {
      console.error('RelativeOrientationSensor failed', error)
      error.value = new Error('Der Sensor kann nicht gelesen werden.')
      if ((event as ErrorEvent).error.name === "NotReadableError") {
        error.value = new Error('Der Sensor ist nicht verfügbar.')
      }
    }
    sensor.value.start()
    isActive.value = true
  }

  const stop = () => {
    if (!sensor.value) {
      // Nothing to do
      isActive.value = false
      return
    }
    sensor.value?.stop()
    sensor.value = undefined
    isActive.value = false
  }

  return {
    key: INPUT_TYPE_KEY,
    availableIconKey: AVAILABLE_ICON_KEY,
    unavailableIconKey: UNAVAILABLE_ICON_KEY,
    sensorPath: SENSOR_PATH,
    currentSensorValue: readonly(currentSensorValue),
    error: readonly(error),
    isAvailable: readonly(isAvailable),
    isCalibrated: readonly(isCalibrated),
    isActive: readonly(isActive),
    checkAvailability,
    getPermission,
    start,
    stop
  }
}
