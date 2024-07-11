import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import { AbsoluteOrientationSensor } from "motion-sensors-polyfill/src/motion-sensors"


export type Quaternion = [number, number, number, number]
type OrientationSensorLocalCoordinateSystem = "device" | "screen";
export interface OrientationSensorOptions {
  frequency?: number | undefined;
  referenceFrame?: OrientationSensorLocalCoordinateSystem | undefined; // defaults to "device"
}

export class WebSenseAbsoluteOrientationSensor extends AbstractSensor<AbsoluteOrientationSensor, Quaternion, OrientationSensorOptions> {
  constructor() {
    super(
      InputType.ABSOLUTE_ORIENTATION,
      'bi-phone-flip',
      'absoluteOrientationSensor',
      ['accelerometer', 'magnetometer', 'gyroscope'] as unknown as PermissionName[]
    )
  }

  async _getAvailability(): Promise<boolean> {
    if (!("AbsoluteOrientationSensor" in window)) {
      return Promise.resolve(false)
    }
    try {
      new AbsoluteOrientationSensor();
      return Promise.resolve(true)
    } catch (error) {
      if (!(error instanceof Error)) {
        console.error('Unknown error', error)
        return Promise.resolve(false)
      }
      if (error.name === "ReferenceError") {
        console.error("Sensor is not supported by the User Agent.");
      }
      console.error('Unknown error', error)
    }
    return Promise.resolve(false)
  }

  _stopSensor(): Promise<void> {
    this.sensor.value?.stop()
    return Promise.resolve()
  }

  _startSensor(options: OrientationSensorOptions | undefined): Promise<void> {
    this.sensor.value = new AbsoluteOrientationSensor(options)
    this.sensor.value.onreading = () => {
      this.currentSensorValue.value = this.sensor.value?.quaternion
    };
    this.sensor.value.onerror = (event: Event) => {
      console.error(event)
      this.error.value = new Error('Der Sensor kann nicht gelesen werden.')
      if ((event as ErrorEvent).error.name === "NotReadableError") {
        this.error.value = new Error('Der Sensor kann nicht gelesen werden.')
      }
    }
    this.sensor.value.start()
    return Promise.resolve()
  }
}
