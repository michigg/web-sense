import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import {useBattery} from "@vueuse/core"
import {type Ref, ref} from "vue"

export type BatterySensorData = {
  charging: Ref<boolean>,
  chargingTime: Ref<number>,
  dischargingTime: Ref<number>,
  level: Ref<number>
}

export class BatterySensor extends AbstractSensor<unknown, BatterySensorData, unknown> {
  constructor() {
    const {isSupported, charging, chargingTime, dischargingTime, level} = useBattery()
    super(
      InputType.BATTERY,
      'bi-battery-full',
      'battery',
      [],
      ref(isSupported.value),
      ref(false),
      ref(false)
    )
    this.currentSensorValue.value = {
      charging,
      chargingTime,
      dischargingTime,
      level
    }
  }

  _getAvailability(): Promise<boolean> {
    const {isSupported} = useBattery()
    return Promise.resolve(isSupported.value);
  }

  _stopSensor(): Promise<void> {
    // Nothing to do here
    return Promise.resolve()
  }

  _startSensor(): Promise<void> {
    // Nothing to do here
    return Promise.resolve()
  }
}
