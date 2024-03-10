import { InputType } from "@/modules/inputs/models/inputType"
import { readonly, ref } from "vue"
import { AbsoluteOrientationSensor } from "motion-sensors-polyfill/src/motion-sensors"

type OrientationSensorLocalCoordinateSystem = "device" | "screen";

export interface OrientationSensorOptions {
  frequency?: number | undefined;
  referenceFrame?: OrientationSensorLocalCoordinateSystem | undefined; // defaults to "device"
}

export interface DeviceOrientation {
  x: number,
  y: number,
  z: number,
  w: number
}

const INPUT_TYPE_KEY: InputType = InputType.ABSOLUTE_ORIENTATION
const AVAILABLE_ICON_KEY: string = 'bi-phone-flip'
const UNAVAILABLE_ICON_KEY: string = 'bi-phone-flip'
const SENSOR_PATH: string = 'absoluteOrientationSensor'
const isActive = ref(false)
const isAvailable = ref(false)
const isCalibrated = ref(false)
const sensor = ref<AbsoluteOrientationSensor | undefined>()
const currentSensorValue = ref<DeviceOrientation>()
const error = ref<Error | undefined>()

export function useAbsoluteOrientationSensor() {
  const checkAvailability = (): Promise<void> => {
    if (!("AbsoluteOrientationSensor" in window)) {
      isAvailable.value = false
      return Promise.resolve()
    }
    try {
      new AbsoluteOrientationSensor();
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
      navigator.permissions.query(<{name: string}>{ name: "accelerometer" }),
      navigator.permissions.query({ name: "magnetometer" }),
      navigator.permissions.query({ name: "gyroscope" }),
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
    sensor.value = new AbsoluteOrientationSensor(options)
    console.log(sensor.value)
    sensor.value.onreading = () => {
      console.log('reading')
      const [x, y, z, w] = sensor.value?.quaternion || [0, 0, 0, 0]
      currentSensorValue.value = {x, y, z, w}
    };
    sensor.value.onerror = (event) => {
      console.error('AbsoluteOrientationSensor failed', error)
      error.value = new Error('Der Sensor kann nicht gelesen werden.')
      if (event.error.name === "NotReadableError") {
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
