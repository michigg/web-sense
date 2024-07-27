import {afterEach, beforeEach, describe, expect, it, vi} from "vitest"
import {type NetworkState, useNetwork} from "@vueuse/core"
import {computed, ref} from "vue"
import {NetworkSensor} from "@/modules/inputs/models/sensors/network/Sensor"

describe("NetworkSensor", () => {
  let sensor: NetworkSensor
  const defaultSensorValues = {
    isSupported: ref(false),
    isOnline: ref(false),
    offlineAt: ref(false),
    onlineAt: ref(0),
    downlink: ref(0),
    downlinkMax: ref(0),
    effectiveType: ref('4g'),
    rtt: ref(0),
    saveData: ref(false),
    type: ref('cellular')
  } as unknown as Readonly<NetworkState>

  beforeEach(() => {
    vi.mock('@vueuse/core')
    vi.mocked(useNetwork).mockReturnValue(defaultSensorValues)
    sensor = new NetworkSensor()
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  describe('isAvailable', () => {
    it('isAvailable - set to false if NetworkSensor composable isSupported is false', async () => {
      vi.mocked(useNetwork).mockReturnValueOnce({
        ...defaultSensorValues,
        isSupported: ref(false)
      })

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeFalsy()
    })
    it('isAvailable - set to true if NetworkSensor composable isSupported is true', async () => {
      vi.mocked(useNetwork).mockReturnValue({
        ...defaultSensorValues,
        isSupported: ref(true)
      })
      sensor = new NetworkSensor()

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeTruthy()
    })
  })

  describe('start', () => {
    it('start - starts sensor', async () => {
      vi.mocked(useNetwork).mockReturnValue('Test' as unknown as Readonly<NetworkState>)
      await sensor.start()

      expect(sensor.currentSensorValue.value).toEqual('Test')
      expect(sensor.isActive.value).toBeTruthy()

    })
  })

  describe('stop', () => {
    it('stop - does not call stop if no sensor set', async () => {
      await sensor.stop()

      expect(sensor.currentSensorValue.value).toBeUndefined()
      expect(sensor.isActive.value).toBe(false)
    })
  })
})
