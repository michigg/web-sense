import {InputType} from "@/modules/inputs/models/inputType"
import {type DeviceMotionOptions, useDeviceMotion} from '@vueuse/core'
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import {ref, type Ref} from "vue"

export interface DeviceMotionSensorData {
  interval: Ref<number>
  accelerationIncludingGravity: Ref<DeviceMotionEventAcceleration | null>
  acceleration: Ref<DeviceMotionEventAcceleration | null>
  rotationRate: Ref<DeviceMotionEventRotationRate | null>
}

export class DeviceMotionSensor extends AbstractSensor<never, DeviceMotionSensorData, DeviceMotionOptions> {
  constructor() {
    super(
      InputType.DEVICE_MOTION,
      'bi-phone-flip',
      'deviceMotion',
      []
    )
  }

  getDeviceMotion() {
    return useDeviceMotion()
  }

  _getAvailability(): Promise<boolean> {
    const {interval} = useDeviceMotion()
    return Promise.resolve(interval.value > 0)
  }

  _startSensor(options?: DeviceMotionOptions | undefined): Promise<void> {
    const {interval, accelerationIncludingGravity, acceleration, rotationRate} = useDeviceMotion(options)
    this.currentSensorValue.value = {
      interval,
      acceleration,
      accelerationIncludingGravity,
      rotationRate
    }
    return Promise.resolve()
  }

  _stopSensor(): Promise<void> {
    this.currentSensorValue.value = {
      interval: ref(-1),
      acceleration: ref(null),
      accelerationIncludingGravity: ref(null),
      rotationRate: ref(null)
    }
    return Promise.resolve()
  }
}
