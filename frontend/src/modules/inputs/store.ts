import {MicSensor} from "@/modules/inputs/models/sensors/microphone/Sensor"
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {GeolocationSensor} from "@/modules/inputs/models/sensors/geolocation/Sensor"
import {DummySensor} from "@/modules/inputs/models/sensors/dummy/Sensor"
import {SurveySensor} from "@/modules/inputs/models/sensors/survey/Sensor"
import {InputType} from "@/modules/inputs/models/inputType"
import {defineStore} from "pinia"
import {NetworkSensor} from "@/modules/inputs/models/sensors/network/Sensor"
import {DeviceMotionSensor} from "@/modules/inputs/models/sensors/deviceMotion/Sensor"
import {BatterySensor} from "@/modules/inputs/models/sensors/battery/Sensor"
import {WebSenseAmbientLightSensor} from "@/modules/inputs/models/sensors/ambientLight/Sensor"
import {WebSenseAbsoluteOrientationSensor} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/Sensor"
import {WebSenseRelativeOrientationSensor} from "@/modules/inputs/models/sensors/relativeOrientationSensor/Sensor"
import {WebSenseAccelerometerSensor} from "@/modules/inputs/models/sensors/accelerometerSensor/Sensor"
import {WebSenseGravitySensor} from "@/modules/inputs/models/sensors/gravitySensor/Sensor"
import {WebSenseGyroscopeSensor} from "@/modules/inputs/models/sensors/gyroscopeSensor/Sensor"
import {WebSenseLinearAccelerationSensor} from "@/modules/inputs/models/sensors/linearAccelerometerSensor/Sensor"
import {WebSenseMagnetometerSensor} from "@/modules/inputs/models/sensors/magnetometerSensor/Sensor"

interface SensorsState {
  sensors: Map<InputType, Sensor>;
}

export const useSensorStore = defineStore("sensorStore", {
  state (): SensorsState {
    return {
      sensors: new Map<InputType, Sensor>([
        [InputType.DUMMY, new DummySensor()],
        [InputType.SURVEY, new SurveySensor()],
        [InputType.MIC, new MicSensor()],
        [InputType.GEOLOCATION, new GeolocationSensor()],
        [InputType.NETWORK, new NetworkSensor()],
        [InputType.DEVICE_MOTION, new DeviceMotionSensor()],
        [InputType.BATTERY, new BatterySensor()],
        [InputType.DEVICE_LIGHT, new WebSenseAmbientLightSensor()],
        [InputType.ABSOLUTE_ORIENTATION, new WebSenseAbsoluteOrientationSensor()],
        [InputType.RELATIVE_ORIENTATION, new WebSenseRelativeOrientationSensor()],
        [InputType.ACCELEROMETER, new WebSenseAccelerometerSensor()],
        [InputType.GRAVITY, new WebSenseGravitySensor()],
        [InputType.GYROSCOPE, new WebSenseGyroscopeSensor()],
        [InputType.LINEAR_ACCELERATION, new WebSenseLinearAccelerationSensor()],
        [InputType.MAGNETOMETER, new WebSenseMagnetometerSensor()],
        [InputType.RELATIVE_ORIENTATION, new WebSenseRelativeOrientationSensor()]
      ])
    }
  },
  getters: {
    getSensor:
      (state: SensorsState) =>
        (sensorKey: InputType): Sensor | undefined => {
          return state.sensors.get(sensorKey)
        },
    getSensorsFromKeys:
      (state: SensorsState) =>
        (sensorKeys: Array<InputType>): Map<InputType, Sensor> => {
          const selectedSensors = new Map<InputType, Sensor>()
          if (!sensorKeys) {
            return selectedSensors
          }
          for (const sensorKey of sensorKeys) {
            const sensor = state.sensors.get(sensorKey)
            if (sensor) {
              selectedSensors.set(sensorKey, sensor)
            }
          }
          return selectedSensors
        },
    sensorsAvailable () {
      return (sensorKeys: Array<InputType>): boolean => {
        const sensors = this.getSensorsFromKeys(sensorKeys)
        const availabilities = []
        for (const value of sensors.values()) {
          const sensor = value as Sensor
          availabilities.push(sensor.isAvailable)
        }
        return availabilities.every(Boolean)
      }
    },
    getSensors: (state: SensorsState) => new Map(state.sensors),
    getSensorTypes: (state: SensorsState): InputType[] =>
      Array.from(state.sensors.keys())
  },
  actions: {
    updateSensor (sensor: Sensor) {
      this.sensors.set(sensor.key, sensor)
    },
    async checkAvailability () {
      for (const sensor of this.sensors.values()) {
        const clonedSensor = sensor.clone()
        await clonedSensor.checkAvailability()
        this.updateSensor(clonedSensor)
      }
    }
  }
})
