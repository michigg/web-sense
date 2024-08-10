import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import {RelativeOrientationSensor} from "motion-sensors-polyfill/src/motion-sensors"
import {Result} from "@/modules/tasks/models/result"
import {ResultValueKey} from "@/modules/inputs/models/sensors/resultValueKeys"


export type Quaternion  = [number, number, number, number]
type OrientationSensorLocalCoordinateSystem = "device" | "screen";
export interface OrientationSensorOptions {
  frequency?: number | undefined;
  referenceFrame?: OrientationSensorLocalCoordinateSystem | undefined; // defaults to "device"
}

export class WebSenseRelativeOrientationSensor extends AbstractSensor<RelativeOrientationSensor, Quaternion, OrientationSensorOptions> {
  constructor() {
    super(
      InputType.RELATIVE_ORIENTATION,
      'bi-phone-flip',
      'relativeOrientationSensor',
      ['accelerometer', 'gyroscope'] as unknown as PermissionName[]
    )
  }

  _getAvailability(): Promise<boolean> {
    if (!("RelativeOrientationSensor" in window)) {
      return Promise.resolve(false)
    }
    try {
      new RelativeOrientationSensor();
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

  _startSensor(options?: OrientationSensorOptions | undefined): Promise<void> {
    this.sensor.value = new RelativeOrientationSensor(options)
    this.sensor.value.onreading = () => {
      this.currentSensorValue.value = this.sensor.value?.quaternion
      const result = new Result(undefined, undefined, this.sensor.value.timestamp)
      result.metas.set(ResultValueKey.FREQUENCY_ABSOLUTE_ORIENTATION_SENSOR, options?.frequency || 'Hardware definiert!')
      result.metas.set(ResultValueKey.REFERENCE_FRAME, options?.referenceFrame || 'device')
      result.measurements.set(ResultValueKey.QUATERNION, this.sensor.value?.quaternion)
      this.currentResult.value = result
      this.lastReadingDate.value = new Date()
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
