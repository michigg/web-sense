import {InputType} from "@/modules/inputs/models/inputType"
import {type ConfigurableWindow, type NetworkState, useNetwork} from '@vueuse/core'
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import {ref} from "vue"


export class NetworkSensor extends AbstractSensor<string, NetworkState, ConfigurableWindow> {
  constructor() {
    const {isSupported} = useNetwork()
    super(
      InputType.NETWORK,
      'bi-router',
      'network',
      [] as unknown as PermissionName[],
      isSupported,
      ref(false),
      ref(false)
    )
  }

  getNetwork() {
    return useNetwork()
  }

  _getAvailability(): Promise<boolean> {
    const {isSupported} = useNetwork()
    return Promise.resolve(isSupported.value)
  }

  _startSensor(options?: ConfigurableWindow): Promise<void> {
    this.currentSensorValue.value = useNetwork(options)
    this.sensor.value = 'Network Sensor Set'
    return Promise.resolve()
  }

  _stopSensor(): Promise<void> {
    this.currentSensorValue.value = undefined
    this.sensor.value = undefined
    return Promise.resolve()
  }
}
