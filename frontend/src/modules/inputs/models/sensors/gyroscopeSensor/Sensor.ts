import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import {Gyroscope} from "motion-sensors-polyfill/src/motion-sensors"


export interface GyroscopeValues {
  x?: number,
  y?: number,
  z?: number
}

export class WebSenseGyroscopeSensor extends AbstractSensor<Gyroscope, GyroscopeValues, never> {
  constructor() {
    super(
      InputType.GYROSCOPE,
      'bi-phone-flip',
      'gyroscopeSensor',
      ['accelerometer'] as unknown as PermissionName[]
    )
  }

  _getAvailability(): Promise<boolean> {
    if (!("Gyroscope" in window)) {
      return Promise.resolve(false)
    }
    try {
      new Gyroscope();
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

  _startSensor(options: undefined): Promise<void> {
    this.sensor.value = new Gyroscope(options)
    this.sensor.value.onreading = () => {
      this.currentSensorValue.value = {
        x: this.sensor.value?.x,
        y: this.sensor.value?.y,
        z: this.sensor.value?.z
      }
    }
    this.sensor.value.onerror = (event: Event) => {
      console.error(event)
      this.error.value = new Error('Der Sensor kann nicht gelesen werden.')
      if ((event as ErrorEvent).error.name === "NotReadableError") {
        this.error.value = new Error('Der Sensor ist nicht verfügbar.')
      }
    }
    this.sensor.value.start()
    return Promise.resolve(undefined)
  }

  _stopSensor(): Promise<void> {
    this.sensor.value?.stop()
    return Promise.resolve()
  }
}
