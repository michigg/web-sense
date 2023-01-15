import type { Ref } from "vue"

export class DeviceMotion {
  acceleration: Ref<DeviceMotionEventAcceleration | null>
  accelerationIncludingGravity: Ref<DeviceMotionEventAcceleration | null>
  rotationRate: Ref<DeviceMotionEventRotationRate | null>
  interval: Ref<number>

  constructor (
    acceleration: Ref<DeviceMotionEventAcceleration | null>,
    accelerationIncludingGravity: Ref<DeviceMotionEventAcceleration | null>,
    rotationRate: Ref<DeviceMotionEventRotationRate | null>,
    interval: Ref<number>
  ) {
    this.acceleration = acceleration
    this.accelerationIncludingGravity = accelerationIncludingGravity
    this.rotationRate = rotationRate
    this.interval = interval
  }

  clone (): DeviceMotion {
    return new DeviceMotion(
      this.acceleration, 
      this.accelerationIncludingGravity, 
      this.rotationRate, 
      this.interval
    )
  }
}
