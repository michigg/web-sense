import {afterEach, beforeEach, describe, expect, it, vi} from "vitest"
import * as motionSensorsExports from "motion-sensors-polyfill/src/motion-sensors"
import {WebSenseGravitySensor} from "@/modules/inputs/models/sensors/gravitySensor/Sensor"

describe("GravitySensor", () => {
  let sensor: WebSenseGravitySensor

  beforeEach(() => {
    sensor = new WebSenseGravitySensor()
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
    it('isAvailable - set to false if GravitySensor instantiation fails', async () => {
      Object.defineProperty(window, "GravitySensor", {})
      vi.spyOn(motionSensorsExports, 'GravitySensor').mockImplementationOnce(() => {
        throw new Error("Test Error")
      })

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeFalsy()
    })
    it('isAvailable - set to true if GravitySensor instantiation succeed', async () => {
      Object.defineProperty(window, "GravitySensor", {})

      await sensor.checkAvailability()

      expect(sensor.isAvailable.value).toBeTruthy()
    })
  })

  describe('getPermission', () => {
    it('getPermission - returns granted if all permissions granted', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.permissions = {query: vi.fn()}
      vi.spyOn(navigator.permissions, 'query').mockResolvedValue({state: 'granted'} as PermissionStatus)

      const permissionState = await sensor.queryPermissions()

      expect(permissionState).toBe('granted')
    })
    it('getPermission - returns denied if one permissions is denied', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.permissions = {query: vi.fn()}
      vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({state: 'denied'} as PermissionStatus)

      const permissionState = await sensor.queryPermissions()

      expect(permissionState).toBe('denied')
    })
  })
  describe('start', () => {
    it('start - throws error if permission denied', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.permissions = {query: vi.fn()}
      vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({state: 'denied'} as PermissionStatus)

      await expect(() => sensor.start())
        .rejects
        .toThrow(
          new Error('Sensor kann aufgrund fehlender Berechtigung nicht gestartet werden. Bitte erteilen Sie die Berechtigung.')
        )
    })
    it('start - starts sensor', async () => {
      const GravitySensorMock = {
        start: vi.fn(),
        stop: vi.fn(),
      }
      vi.spyOn(motionSensorsExports, 'GravitySensor').mockReturnValue(GravitySensorMock)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.permissions = {query: vi.fn()}
      vi.spyOn(navigator.permissions, 'query').mockResolvedValue({state: 'granted'} as PermissionStatus)
      vi.spyOn(navigator.permissions, 'query').mockResolvedValue({state: 'granted'} as PermissionStatus)

      await sensor.start()

      expect(GravitySensorMock.start).toHaveBeenCalled()
      expect(sensor.isActive.value).toBeTruthy()

    })
    it('start - stops sensor if started twice', async () => {
      const GravitySensorMock = {
        start: vi.fn(),
        stop: vi.fn(),
      }
      vi.spyOn(motionSensorsExports, 'GravitySensor').mockReturnValue(GravitySensorMock)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.permissions = {query: vi.fn()}
      vi.spyOn(navigator.permissions, 'query').mockResolvedValue({state: 'granted'} as PermissionStatus)

      await sensor.start()
      await sensor.start()

      expect(GravitySensorMock.start).toHaveBeenCalled()
      expect(GravitySensorMock.stop).toHaveBeenCalled()
      expect(sensor.isActive.value).toBeTruthy()

    })
    it('start - updates currentSensorValue if onreading called', async () => {
      const GravitySensorMock = {
        start: vi.fn(),
        stop: vi.fn(),
        x: 0,
        y: 0,
        z: 0,
        onreading: () => {
        }
      }
      vi.spyOn(motionSensorsExports, 'GravitySensor').mockReturnValue(GravitySensorMock)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.permissions = {query: vi.fn()}
      vi.spyOn(navigator.permissions, 'query').mockResolvedValue({state: 'granted'} as PermissionStatus)

      await sensor.start()
      GravitySensorMock.x = 1
      GravitySensorMock.y = 2
      GravitySensorMock.z = 3

      GravitySensorMock.onreading()

      expect(sensor.currentSensorValue.value?.x).toBe(1)
      expect(sensor.currentSensorValue.value?.y).toBe(2)
      expect(sensor.currentSensorValue.value?.z).toBe(3)
    })
    it('start - updates error if onerror called', async () => {
      const GravitySensorMock = {
        start: vi.fn(),
        stop: vi.fn(),
        onerror: (event: Event) => event
      }
      vi.spyOn(motionSensorsExports, 'GravitySensor').mockReturnValue(GravitySensorMock)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.permissions = {query: vi.fn()}
      vi.spyOn(navigator.permissions, 'query').mockResolvedValue({state: 'granted'} as PermissionStatus)

      await sensor.start()

      const errorEvent = new ErrorEvent('Test', {error: {name: 'NotReadableError'}})
      GravitySensorMock.onerror(errorEvent)

      expect(sensor.error.value).toStrictEqual(new Error('Der Sensor kann nicht gelesen werden.'))
    })
  })

  describe('stop', () => {
    it('stop - does not call stop if no sensor set', async () => {
      await sensor.stop()

      expect(sensor.isActive.value).toBe(false)
    })
    it('stop - call stop if on sensor set', async () => {
      const AbsoluteOrientationSensorMock = {
        start: vi.fn(),
        stop: vi.fn(),
      }
      sensor.sensor.value = AbsoluteOrientationSensorMock
      expect(sensor.sensor.value).toBeDefined()

      await sensor.stop()

      expect(sensor.isActive.value).toBe(false)
      expect(sensor.sensor.value).toBeUndefined()
      expect(AbsoluteOrientationSensorMock.stop).toHaveBeenCalled()
    })
  })
})
