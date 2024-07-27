import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"

export interface AmbientLightSensorData {
  illuminance: number | undefined, // light level in lux
}

export class WebSenseAmbientLightSensor extends AbstractSensor<AmbientLightSensor, AmbientLightSensorData, never> {
  constructor() {
    super(
      InputType.DEVICE_LIGHT,
      'bi-lamp',
      'ambientLight',
      []
    )
  }

  queryPermissions (): Promise<PermissionState> {
    try {
      if ("AmbientLightSensor" in window) {
        new AmbientLightSensor()
        return Promise.resolve("granted")
      }
    } catch (e) {
      console.error(e)
    }
    return Promise.resolve("denied")
  }

  _getAvailability(): Promise<boolean> {
    return Promise.resolve("AmbientLightSensor" in window)
  }

  _startSensor(): Promise<void> {
    this.sensor.value = new AmbientLightSensor()
    this.sensor.value.addEventListener("reading", () => {
      const illuminance = this.sensor.value.illuminance
      console.debug("Current light level:", illuminance);
      this.currentSensorValue.value = illuminance
    })
    this.sensor.value.addEventListener("error", (event: {error: Error}) => {
      this.error.value = new Error('Der Sensor kann nicht gelesen werden.')
      if ((event as ErrorEvent).error.name === "NotReadableError") {
        this.error.value = (event as ErrorEvent).error
      }
    })
    this.sensor.value.start();
    return Promise.resolve()
  }

  _stopSensor(): Promise<void> {
    this.sensor.value?.stop()
    return Promise.resolve()
  }
}
