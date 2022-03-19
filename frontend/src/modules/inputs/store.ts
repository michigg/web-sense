import { Commit } from 'vuex'
import { MicSensor } from '@/modules/inputs/models/sensors/microphone/Sensor'
import { Sensor } from '@/modules/inputs/models/Sensor'
import { GeolocationSensor } from '@/modules/inputs/models/sensors/geolocation/Sensor'
import { DummySensor } from '@/modules/inputs/models/sensors/dummy/Sensor'
import { SurveySensor } from '@/modules/inputs/models/sensors/survey/Sensor'
import { InputType } from '@/modules/inputs/models/inputType'

interface SensorsState {
  sensors: Map<InputType, Sensor>
}

export const SET_SENSOR = 'SET_SENSOR'

export const sensorsStore = {
  namespaced: true,
  state (): SensorsState {
    return {
      sensors: new Map<InputType, Sensor>([
        [InputType.DUMMY, new DummySensor()],
        [InputType.SURVEY, new SurveySensor()],
        [InputType.MIC, new MicSensor()],
        [InputType.GEOLOCATION, new GeolocationSensor()]
      ])
    }
  },
  getters: {
    getSensor: (state: SensorsState) => (sensorKey: InputType): Sensor | undefined => {
      return state.sensors.get(sensorKey)
    },
    getSensorsFromKeys: (state: SensorsState) => (sensorKeys: Array<InputType>): Map<InputType, Sensor> => {
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
    sensorsAvailable: (state: SensorsState, getters: any) => (sensorKeys: Array<InputType>): boolean => {
      const sensors = getters.getSensorsFromKeys(sensorKeys)
      const availabilities = []
      for (const [key, value] of sensors.entries()) {
        const sensor = value as Sensor
        availabilities.push(sensor.isAvailable)
      }
      return availabilities.every(Boolean)
    },
    getSensors: (state: SensorsState) => new Map(state.sensors),
    getSensorTypes: (state: SensorsState) => Array.from(state.sensors.keys())
  },
  mutations: {
    [SET_SENSOR] (state: SensorsState, sensor: Sensor) {
      state.sensors.set(sensor.key, sensor)
    }
  },
  actions: {
    async checkAvailability ({
      state,
      commit
    }: { state: SensorsState, commit: Commit }) {
      for (const sensor of state.sensors.values()) {
        const cloneSensor = sensor.clone()
        await cloneSensor.checkAvailability()
        commit(SET_SENSOR, cloneSensor)
      }
    },
    async updateSensor ({ commit }: { commit: Commit }, sensor: Sensor) {
      commit(SET_SENSOR, sensor)
    }
  }
}
