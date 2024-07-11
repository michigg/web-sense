import { InputType } from "@/modules/inputs/models/inputType"
import { AbstractSensor } from "@/modules/inputs/models/sensors/abstractSensor"
import { GravitySensor } from "motion-sensors-polyfill/src/motion-sensors"

export interface GravityValues {
  x?: number,
  y?: number,
  z?: number
}
export interface GravitySensorOptions { frequency?: number }

export class WebSenseGravitySensor extends AbstractSensor<GravitySensor, GravityValues, GravitySensorOptions>{
  constructor() {
    super(
      InputType.GRAVITY,
      'bi-chevron-double-down',
      'gravitySensor',
      ['accelerometer'] as unknown as PermissionName[]
    )
  }

  _getAvailability(): Promise<boolean> {
    if (!("Accelerometer" in window)) {
      return Promise.resolve(false)
    }
    try {
      new GravitySensor();
      return Promise.resolve(true)
    } catch (error) {
      if (!(error instanceof Error)) {
        console.error('Unknown error', error)
        return Promise.resolve(false)
      }
      if (error.name === "ReferenceError") {
        console.error("Sensor is not supported by the User Agent.");
      }
    }
    return Promise.resolve(false)
  }

  _startSensor(options?: GravitySensorOptions): Promise<void> {
    this.sensor.value = new GravitySensor(options)
    this.sensor.value.onreading = () => {
      this.currentSensorValue.value = {
        x: this.sensor.value?.x,
        y: this.sensor.value?.y,
        z: this.sensor.value?.z
      }
    };
    this.sensor.value.onerror = (event: Event) => {
      this.error.value = new Error('Der Sensor kann nicht gelesen werden.')
      if ((event as ErrorEvent).error.name === "NotReadableError") {
        this.error.value = new Error('Der Sensor ist nicht verfügbar.')
      }
    }
    this.sensor.value.start()
    return Promise.resolve()
  }

  _stopSensor(): Promise<void> {
    this.sensor.value?.stop()
    return Promise.resolve()
  }
}
