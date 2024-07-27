import {afterEach, beforeEach, describe, expect, it, vi} from "vitest"
import {WebSenseAmbientLightSensor} from "@/modules/inputs/models/sensors/ambientLight/Sensor"

describe("AmbientLightSensor", () => {
  let sensor: WebSenseAmbientLightSensor

  beforeEach(() => {
    sensor = new WebSenseAmbientLightSensor()
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  describe('isAvailable', () => {
    it('isAvailable - set to false if not in window', async () => {
      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeFalsy()
    })
    it('isAvailable - set to true if AmbientLightSensor instantiation succeed', async () => {
      Object.defineProperty(window, "AmbientLightSensor", {})

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeTruthy()
    })
  })

  describe('getPermission', () => {
    // TODO: cannot mock AmbientLightSensor constructor effective
    it.skip('getPermission - returns granted if all permissions granted', async () => {
      Object.defineProperty(window, "AmbientLightSensor", {})

      const permissionState = await sensor.queryPermissions()

      expect(permissionState).toBe('granted')
    })
    it('getPermission - returns denied if one permissions is denied', async () => {
      const AmbientLightSensorMock = vi.fn().mockImplementationOnce(() => {
        throw new Error("Test Error")
      })
      Object.defineProperty(window, "AmbientLightSensor", AmbientLightSensorMock)
      const permissionState = await sensor.queryPermissions()

      expect(permissionState).toBe('denied')
    })
  })
  describe('start', () => {
    it('start - throws error if permission denied', async () => {
      const AmbientLightSensorMock = vi.fn().mockImplementationOnce(() => {
        throw new Error("Test Error")
      })
      Object.defineProperty(window, "AmbientLightSensor", AmbientLightSensorMock)

      await expect(() => sensor.start())
        .rejects
        .toThrow(
          new Error('Sensor kann aufgrund fehlender Berechtigung nicht gestartet werden. Bitte erteilen Sie die Berechtigung.')
        )
    })
  })
})
