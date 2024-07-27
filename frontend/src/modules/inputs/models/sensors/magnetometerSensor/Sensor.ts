import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"


export interface MagnetometerValues {
  x?: number,
  y?: number,
  z?: number
}

export class WebSenseMagnetometerSensor extends AbstractSensor<Magnetometer, MagnetometerValues, never> {
  constructor() {
    super(
      InputType.MAGNETOMETER,
      'bi-phone-flip',
      'magnetometerSensor',
      ['magnetometer'] as unknown as PermissionName[]
    )
  }

  _getAvailability(): Promise<boolean> {
    if (!("Magnetometer" in window)) {
      return Promise.resolve(false)
    }
    try {
      new Magnetometer();
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
    this.sensor.value = new Magnetometer(options)
    this.sensor.value.onreading = () => {
      console.log('reading')
      this.currentSensorValue.value = {
        x: this.sensor.value?.x,
        y: this.sensor.value?.y,
        z: this.sensor.value?.z
      }
    };
    this.sensor.value.onerror = (event: Event) => {
      this.logError((event as ErrorEvent).error)
      this.error.value = new Error('Der Sensor ist nicht verfügbar.')
      if ((event as ErrorEvent).error.name === "NotReadableError") {
        this.error.value = new Error('Der Sensor kann nicht gelesen werden.')
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
