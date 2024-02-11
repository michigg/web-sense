import type { Sensor } from "@/modules/inputs/models/Sensor"
import { InputType } from "@/modules/inputs/models/inputType"
import {ref, type Ref} from "vue"

const sensor = ref<any | undefined>()
const illuminance = ref<number | undefined>
const sensorError = ref<Error | undefined>
export class WebSenseAmbientLightSensor implements Sensor {
  public readonly key: InputType = InputType.DEVICE_LIGHT
  public readonly availableIconKey: string = "bi-lamp"
  public readonly unavailableIconKey: string = "bi-lamp"
  public readonly sensorPath = 'ambientLight'
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean


  constructor (
    isActive = false,
    isAvailable = false,
    isCalibrated = false
  ) {
    this.isActive = isActive
    this.isAvailable = isAvailable
    this.isCalibrated = isCalibrated
  }

  checkAvailability (): Promise<void> {
    console.log("checkAvailability", sensor)
    this.isAvailable = "AmbientLightSensor" in window
    return Promise.resolve(undefined)
  }

  getPermission (): Promise<PermissionState> {
    console.log("getPermission", sensor)
    if ("AmbientLightSensor" in window) {
      sensor.value = new AmbientLightSensor()
      return Promise.resolve("granted")
    }
    return Promise.resolve("denied")
  }

  useAmbientLightSensor() {
    console.log("useAmbientLightSensor", sensor)
    return {
      illuminance,
      error: sensorError
    }
  }

  watchIlluminance () {
    console.log("wtf", sensor)
    if (!sensor.value) {
      sensorError.value = new Error('Ambilight sensor is not initialized!')
    }
    sensor.value.addEventListener("reading", (event) => {
      console.log("Current light level:", sensor.value.illuminance);
      illuminance.value = sensor.value.illuminance
      sensorError.value = undefined
    });
    sensor.value.addEventListener("error", (event) => {
      console.log(event.error.name, event.error.message);
      sensorError.value = event.error
    });
    sensor.value.start();
  }

  stopWatch() {
    if (!sensor.value) {
      return
    }
    sensor.value.stop()
  }

  /**
   * Reads current illuminance value from AmbientLightSensor
   */
  getIlluminance (): number {
    return sensor.value.illuminance
  }

  clone (): Sensor {
    return new WebSenseAmbientLightSensor(
      this.isActive,
      this.isAvailable,
      this.isCalibrated
    )
  }
}
