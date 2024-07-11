import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import {Accelerometer} from "motion-sensors-polyfill/src/motion-sensors"

export interface AccelerometerValues {
  x?: number,
  y?: number,
  z?: number
}

export interface AccelerometerOptions {
 frequency: number
}

export class WebSenseAccelerometerSensor extends AbstractSensor<Accelerometer, AccelerometerValues, AccelerometerOptions> {
  constructor() {
    super(
      InputType.ACCELEROMETER,
      'bi-arrows-move',
      'accelerometerSensor',
      ['accelerometer'] as unknown as PermissionName[]
    )
  }

  _getAvailability(): Promise<boolean> {
    if (!("Accelerometer" in window)) {
      return Promise.resolve(false)
    }
    try {
      new Accelerometer();
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

  _startSensor(options: AccelerometerOptions | undefined): Promise<void> {
    this.sensor.value = new Accelerometer(options)
    this.sensor.value.onreading = () => {
      console.debug('reading')
      this.currentSensorValue.value = {
        x: this.sensor.value?.x,
        y: this.sensor.value?.y,
        z: this.sensor.value?.z
      }
    };
    this.sensor.value.onerror = (event: Event) => {
      console.error('AbsoluteOrientationSensor failed', event)
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
    return Promise.resolve(undefined)
  }
}
