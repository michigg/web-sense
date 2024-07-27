import {afterEach, beforeEach, describe, expect, it, vi} from "vitest"
import {BatterySensor} from "@/modules/inputs/models/sensors/battery/Sensor"
import {useBattery} from "@vueuse/core"
import {computed, ref} from "vue"

describe("BatterySensor", () => {
  let sensor: BatterySensor
  const defaultSensorValues = {
    charging: ref(false),
    chargingTime: ref(0),
    dischargingTime: ref(0),
    level: ref(0),
    isSupported: computed(() => false)
  }

  beforeEach(() => {
    vi.mock('@vueuse/core')
    vi.mocked(useBattery).mockReturnValueOnce(defaultSensorValues)
    sensor = new BatterySensor()
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  describe('isAvailable', () => {
    it('isAvailable - set to false if BatterySensor composable isSupported is false', async () => {
      vi.mocked(useBattery).mockReturnValueOnce({
        ...defaultSensorValues,
        isSupported: computed(() => false)
      })

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeFalsy()
    })
    it('isAvailable - set to true if BatterySensor composable isSupported is true', async () => {
      vi.mocked(useBattery).mockReturnValue({
        ...defaultSensorValues,
        isSupported: computed(() => true)
      })
      sensor = new BatterySensor()

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeTruthy()
    })
  })
})
