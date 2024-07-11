import {afterEach, describe, expect, it, vi} from "vitest"
import {
  useAbsoluteOrientationSensor
} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/useAbsoluteOrientationSensor"
import * as motionSensorsExports from "motion-sensors-polyfill/src/motion-sensors"

describe("useAbsoluteOrientationSensor.ts", () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('isAvailable - set to false if not in window', async () => {
    const { isAvailable, checkAvailability } = useAbsoluteOrientationSensor()

    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })
  it('isAvailable - set to false if AbsoluteOrientationSensor instantiation fails', async () => {
    const { isAvailable, checkAvailability } = useAbsoluteOrientationSensor()
    Object.defineProperty(window, "AbsoluteOrientationSensor", {})
    vi.spyOn(motionSensorsExports, 'AbsoluteOrientationSensor').mockImplementationOnce(() => {
      // whatever suites you from first two examples
      throw new Error("Test Error")
    })
    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })
  it('isAvailable - set to true if AbsoluteOrientationSensor instantiation succeed', async () => {
    const { isAvailable, checkAvailability } = useAbsoluteOrientationSensor()
    Object.defineProperty(window, "AbsoluteOrientationSensor", {})
    await checkAvailability()

    expect(isAvailable.value).toBeTruthy()
  })

  it('getPermission - returns granted if all permissions granted', async () => {
    const { getPermission } = useAbsoluteOrientationSensor()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)

    const permissionState = await getPermission()

    expect(permissionState).toBe('granted')
  })
  it('getPermission - returns denied if one permissions is denied', async () => {
    const { getPermission } = useAbsoluteOrientationSensor()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'denied' } as PermissionStatus)

    const permissionState = await getPermission()

    expect(permissionState).toBe('denied')
  })

  it('start - throws error if permission denied', async () => {
    const { start } = useAbsoluteOrientationSensor()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'denied' } as PermissionStatus)

    await expect(() => start())
      .rejects
      .toThrow(
        new Error('Orientierungssensor kann aufgrund fehlender Berechtigung nicht gestartet werden. Bitte erteilen Sie die Berechtigung.')
      )
  })

  it('start - starts sensor', async () => {
    const AbsoluteOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
    }
    vi.spyOn(motionSensorsExports, 'AbsoluteOrientationSensor').mockReturnValue(AbsoluteOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)

    const { start, isActive } = useAbsoluteOrientationSensor()
    await start()

    expect(AbsoluteOrientationSensorMock.start).toHaveBeenCalled()
    expect(isActive.value).toBeTruthy()

  })
  it('start - stops sensor if started twice', async () => {
    const AbsoluteOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
    }
    vi.spyOn(motionSensorsExports, 'AbsoluteOrientationSensor').mockReturnValue(AbsoluteOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)

    const { start, isActive } = useAbsoluteOrientationSensor()
    await start()
    await start()

    expect(AbsoluteOrientationSensorMock.start).toHaveBeenCalled()
    expect(AbsoluteOrientationSensorMock.stop).toHaveBeenCalled()
    expect(isActive.value).toBeTruthy()

  })

  it('start - updates currentSensorValue if onreading called', async () => {
    const expectedQuaternion = [1, 2, 3, 4]
    const AbsoluteOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
      quaternion: [0, 0, 0, 0],
      onreading: () => {}
    }
    vi.spyOn(motionSensorsExports, 'AbsoluteOrientationSensor').mockReturnValue(AbsoluteOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    const { start, currentSensorValue } = useAbsoluteOrientationSensor()
    await start()
    AbsoluteOrientationSensorMock.quaternion = expectedQuaternion

    AbsoluteOrientationSensorMock.onreading()

    expect(currentSensorValue.value).toStrictEqual(expectedQuaternion)
  })
  it('start - updates error if onerror called', async () => {
    const AbsoluteOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
      onerror: (event: Event) => event
    }
    vi.spyOn(motionSensorsExports, 'AbsoluteOrientationSensor').mockReturnValue(AbsoluteOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    const { start, error } = useAbsoluteOrientationSensor()
    await start()

    const errorEvent = new ErrorEvent('Test', {error: { name: 'NotReadableError'}})
    AbsoluteOrientationSensorMock.onerror(errorEvent)

    expect(error.value).toStrictEqual(new Error('Der Sensor kann nicht gelesen werden.'))
  })
})
