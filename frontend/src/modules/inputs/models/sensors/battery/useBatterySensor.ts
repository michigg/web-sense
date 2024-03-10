import {InputType} from "@/modules/inputs/models/inputType"
import {useBattery} from "@vueuse/core"
import {readonly, ref} from "vue"

const isCalibrated = ref(false)
const isPermitted = ref(false)
const {isSupported, charging, chargingTime, dischargingTime, level} = useBattery()

export function useBatterySensor() {
  const key = InputType.BATTERY
  const iconKey = "bi-battery-full"
  const sensorPath = 'battery'


  const getMeta = () => ({
    key,
    iconKey,
    sensorPath,
    isAvailable: isSupported.value,
    isPermitted: isPermitted.value,
    isCalibrated: isCalibrated.value
  })

  const requestPermission = (): Promise<PermissionState> => {
    return Promise.resolve("granted")
  }

  return {
    key,
    iconKey,
    sensorPath,
    isAvailable: readonly(isSupported),
    isPermitted: readonly(isPermitted),
    isCalibrated: readonly(isCalibrated),
    getMeta,
    requestPermission,
    sensorData: {
      charging,
      chargingTime,
      dischargingTime,
      level
    }
  }
}
