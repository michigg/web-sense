import { GeolocationSensor } from "./Sensor"
import { describe, beforeEach, it, expect, vi } from "vitest"

describe("GeolocationSensor", () => {
  let sensor: GeolocationSensor

  beforeEach(() => {
    Object.defineProperty(window.navigator, "geolocation", {
      value: {
        getCurrentPosition: vi.fn(),
        watchPosition: vi.fn()
      },
      configurable: true
    })

    sensor = new GeolocationSensor()
  })

  describe('isAvailable', () => {
    it('isAvailable - set to false if GeolocationSensor not in navigator', async () => {
      delete navigator.geolocation

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeFalsy()
    })
    it('isAvailable - set to true if GeolocationSensor in navigator', async () => {
      Object.defineProperty(navigator, "geolocation", {})

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeTruthy()
    })
  })
})
