import {InputType} from "@/modules/inputs/models/inputType"
import {readonly, ref} from "vue"
import {LinearAccelerationSensor} from "motion-sensors-polyfill/src/motion-sensors"

export interface AccelerometerValues {
  x?: number,
  y?: number,
  z?: number
}


const INPUT_TYPE_KEY: InputType = InputType.LINEAR_ACCELERATION
const AVAILABLE_ICON_KEY: string = 'bi-phone-flip'
const UNAVAILABLE_ICON_KEY: string = 'bi-phone-flip'
const SENSOR_PATH: string = 'linearAccelerometerSensor'
const isActive = ref(false)
const isAvailable = ref(false)
const isCalibrated = ref(false)
const sensor = ref<LinearAccelerationSensor | undefined>()
const currentSensorValue = ref<AccelerometerValues>()
const error = ref<Error | undefined>()

export function useLinearAccelerationSensor() {
  const checkAvailability = (): Promise<void> => {
    if (!("LinearAccelerationSensor" in window)) {
      isAvailable.value = false
      return Promise.resolve()
    }
    try {
      new LinearAccelerationSensor();
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
      navigator.permissions.query({name: "accelerometer"}),
    ])
    const permissionGranted = permissionStatuses.every((value) => value.state === 'granted')
    return Promise.resolve(permissionGranted ? 'granted' : 'denied')
  }

  const start = async (options?: { frequency: number }) => {
    const permissionState = await getPermission()
    if (permissionState !== 'granted') {
      throw new Error('LinearAccelerationSensor kann aufgrund fehlender Berechtigung nicht gestartet werden. Bitte erteilen Sie die Berechtigung.')
    }
    if (sensor.value) {
      stop()
    }
    sensor.value = new LinearAccelerationSensor(options)
    sensor.value.onreading = () => {
      console.log('reading')
      currentSensorValue.value = {
        x: sensor.value?.x,
        y: sensor.value?.y,
        z: sensor.value?.z
      }
    };
    sensor.value.onerror = (event) => {
      console.error('LinearAccelerationSensor failed', error)
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
