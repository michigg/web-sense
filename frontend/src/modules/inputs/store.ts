import {InputType} from "@/modules/inputs/models/inputType"
import {WebSenseAbsoluteOrientationSensor} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/Sensor"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"
import {computed, markRaw, type Raw} from "vue"
import {BatterySensor} from "@/modules/inputs/models/sensors/battery/Sensor"
import {DummySensor} from "@/modules/inputs/models/sensors/dummy/Sensor"
import {WebSenseAccelerometerSensor} from "@/modules/inputs/models/sensors/accelerometerSensor/Sensor"
import {WebSenseAmbientLightSensor} from "@/modules/inputs/models/sensors/ambientLight/Sensor"
import {DeviceMotionSensor} from "@/modules/inputs/models/sensors/deviceMotion/Sensor"
import {GeolocationSensor} from "@/modules/inputs/models/sensors/geolocation/Sensor"
import {WebSenseGravitySensor} from "@/modules/inputs/models/sensors/gravitySensor/Sensor"
import {SurveySensor} from "@/modules/inputs/models/sensors/survey/Sensor"
import {MicSensor} from "@/modules/inputs/models/sensors/microphone/Sensor"
import {NetworkSensor} from "@/modules/inputs/models/sensors/network/Sensor"
import {WebSenseRelativeOrientationSensor} from "@/modules/inputs/models/sensors/relativeOrientationSensor/Sensor"
import {WebSenseGyroscopeSensor} from "@/modules/inputs/models/sensors/gyroscopeSensor/Sensor"
import {WebSenseLinearAccelerationSensor} from "@/modules/inputs/models/sensors/linearAccelerometerSensor/Sensor"
import {WebSenseMagnetometerSensor} from "@/modules/inputs/models/sensors/magnetometerSensor/Sensor"

const sensors: Map<InputType, Raw<AbstractSensorType>> = new Map([
  [InputType.DUMMY, markRaw(new DummySensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.SURVEY,  markRaw(new SurveySensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.MIC,  markRaw(new MicSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.GEOLOCATION,  markRaw(new GeolocationSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.NETWORK,  markRaw(new NetworkSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.DEVICE_MOTION,  markRaw(new DeviceMotionSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.BATTERY,  markRaw(new BatterySensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.DEVICE_LIGHT,  markRaw(new WebSenseAmbientLightSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.ABSOLUTE_ORIENTATION,  markRaw(new WebSenseAbsoluteOrientationSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.RELATIVE_ORIENTATION,  markRaw(new WebSenseRelativeOrientationSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.ACCELEROMETER,  markRaw(new WebSenseAccelerometerSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.GRAVITY,  markRaw(new WebSenseGravitySensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.GYROSCOPE,  markRaw(new WebSenseGyroscopeSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.LINEAR_ACCELERATION,  markRaw(new WebSenseLinearAccelerationSensor())] as [InputType, Raw<AbstractSensorType>],
  [InputType.MAGNETOMETER,  markRaw(new WebSenseMagnetometerSensor())] as [InputType, Raw<AbstractSensorType>],
])

/**
 * Fake pinia store. Pinia unwraps refs automatically. The new sensor spec uses sensors inside the object.
 * So we cannot use pinia stores anymore.
 */
export function useSensorStore() {
  const getSensor = (sensorKey: InputType): AbstractSensorType | undefined => sensors.get(sensorKey) as AbstractSensorType | undefined
  const getSensorsFromKeys = (sensorKeys: Array<InputType>): Map<InputType, AbstractSensorType> => {
    const selectedSensors = new Map<InputType, Raw<AbstractSensorType>>()
    if (!sensorKeys) {
      return selectedSensors
    }
    for (const sensorKey of sensorKeys) {
      const sensor = getSensor(sensorKey)
      if (sensor) {
        selectedSensors.set(sensorKey, markRaw(sensor))
      }
    }
    return selectedSensors
  }

  const sensorsAvailable = computed(() => {
    return (sensorKeys: Array<InputType>): boolean => {
      const sensors = getSensorsFromKeys(sensorKeys)
      const availabilities = []
      for (const sensor of sensors.values()) {
        availabilities.push(sensor.isAvailable.value)
      }
      return availabilities.every(Boolean)
    }
  })
  const getSensors = computed<Map<InputType, Raw<AbstractSensorType>>>(() => new Map(sensors))
  const getSensorTypes = computed<InputType[]>(() => Array.from(sensors.keys()))

  const checkAvailability = async () => {
    console.time('[SensorStore]: checkAvailability')
    for (const sensor of sensors.values()) {
      await sensor.checkAvailability()
    }
    console.timeEnd('[SensorStore]: checkAvailability')
    printSensors()
  }

  const printSensors = () => {
    console.table(
      Array.from(sensors.values())
        .map(
          sensor => ({
            key: sensor.key,
            sensorPath: sensor.sensorPath,
            isAvailable: sensor.isAvailable.value,
            isActive: sensor.isActive.value,
            isCalibrated: sensor.isCalibrated.value,
          }))
        .sort((a, b) => a.key.localeCompare(b.key))
    )
  }

  return {
    sensors,
    sensorsAvailable,
    getSensors,
    getSensorTypes,
    checkAvailability,
    getSensor,
    getSensorsFromKeys
  }
}
