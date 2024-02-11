import type { Sensor } from "@/modules/inputs/models/Sensor"
import { InputType } from "@/modules/inputs/models/inputType"
import {ref, type Ref} from "vue"

export class WebSenseAmbientLightSensor implements Sensor {
  public readonly key: InputType = InputType.DEVICE_LIGHT
  public readonly availableIconKey: string = "bi-lamp"
  public readonly unavailableIconKey: string = "bi-lamp"
  public readonly sensorPath = 'ambientLight'
  isActive: boolean
  isAvailable: boolean
  isCalibrated: boolean
  static sensor = ref<any | undefined>()
  static illuminance = ref<number | undefined>()
  static sensorError = ref<Error | undefined>()


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
    console.log("checkAvailability", WebSenseAmbientLightSensor.sensor)
    this.isAvailable = "AmbientLightSensor" in window
    return Promise.resolve(undefined)
  }

  getPermission (): Promise<PermissionState> {
    console.log("getPermission", WebSenseAmbientLightSensor.sensor)
    if ("AmbientLightSensor" in window) {
      WebSenseAmbientLightSensor.sensor.value = new AmbientLightSensor()
      return Promise.resolve("granted")
    }
    return Promise.resolve("denied")
  }

  useAmbientLightSensor() {
    console.log("useAmbientLightSensor", WebSenseAmbientLightSensor.sensor)
    return {
      illuminance: WebSenseAmbientLightSensor.illuminance,
      error: WebSenseAmbientLightSensor.sensorError
    }
  }

  watchIlluminance () {
    console.log("wtf", WebSenseAmbientLightSensor.sensor)
    if (!WebSenseAmbientLightSensor.sensor.value) {
      WebSenseAmbientLightSensor.sensorError.value = new Error('Ambilight sensor is not initialized!')
      return
    }
    WebSenseAmbientLightSensor.sensor.value.addEventListener("reading", () => {
      console.log("Current light level:", WebSenseAmbientLightSensor.sensor.value.illuminance);
      WebSenseAmbientLightSensor.illuminance.value = WebSenseAmbientLightSensor.sensor.value.illuminance
      WebSenseAmbientLightSensor.sensorError.value = undefined
    });
    WebSenseAmbientLightSensor.sensor.value.addEventListener("error", (event: {error: Error}) => {
      console.log(event.error.name, event.error.message);
      WebSenseAmbientLightSensor.sensorError.value = event.error
    });
    WebSenseAmbientLightSensor.sensor.value.start();
  }

  stopWatch() {
    if (!WebSenseAmbientLightSensor.sensor.value) {
      return
    }
    WebSenseAmbientLightSensor.sensor.value.stop()
  }

  /**
   * Reads current illuminance value from AmbientLightSensor
   */
  getIlluminance (): number {
    return WebSenseAmbientLightSensor.sensor.value.illuminance
  }

  clone (): Sensor {
    return new WebSenseAmbientLightSensor(
      this.isActive,
      this.isAvailable,
      this.isCalibrated
    )
  }
}
