import {afterEach, describe, expect, it, vi} from "vitest"
import {
  useRelativeOrientationSensor
} from "@/modules/inputs/models/sensors/relativeOrientationSensor/useRelativeOrientationSensor"
import * as motionSensorsExports from "motion-sensors-polyfill/src/motion-sensors"

describe("useRelativeOrientationSensor.ts", () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('isAvailable - set to false if not in window', async () => {
    const { isAvailable, checkAvailability } = useRelativeOrientationSensor()

    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })
  it('isAvailable - set to false if RelativeOrientationSensor instantiation fails', async () => {
    const { isAvailable, checkAvailability } = useRelativeOrientationSensor()
    Object.defineProperty(window, "RelativeOrientationSensor", {})
    vi.spyOn(motionSensorsExports, 'RelativeOrientationSensor').mockImplementationOnce(() => {
      // whatever suites you from first two examples
      throw new Error("Test Error")
    })
    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })
  it('isAvailable - set to true if RelativeOrientationSensor instantiation succeed', async () => {
    const { isAvailable, checkAvailability } = useRelativeOrientationSensor()
    Object.defineProperty(window, "RelativeOrientationSensor", {})
    await checkAvailability()

    expect(isAvailable.value).toBeTruthy()
  })

  it('getPermission - returns granted if all permissions granted', async () => {
    const { getPermission } = useRelativeOrientationSensor()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)

    const permissionState = await getPermission()

    expect(permissionState).toBe('granted')
  })
  it('getPermission - returns denied if one permissions is denied', async () => {
    const { getPermission } = useRelativeOrientationSensor()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'denied' } as PermissionStatus)

    const permissionState = await getPermission()

    expect(permissionState).toBe('denied')
  })

  it('start - throws error if permission denied', async () => {
    const { start } = useRelativeOrientationSensor()
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
    const relativeOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
    }
    vi.spyOn(motionSensorsExports, 'RelativeOrientationSensor').mockReturnValue(relativeOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)

    const { start, isActive } = useRelativeOrientationSensor()
    await start()

    expect(relativeOrientationSensorMock.start).toHaveBeenCalled()
    expect(isActive.value).toBeTruthy()

  })
  it('start - stops sensor if started twice', async () => {
    const relativeOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
    }
    vi.spyOn(motionSensorsExports, 'RelativeOrientationSensor').mockReturnValue(relativeOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)

    const { start, isActive } = useRelativeOrientationSensor()
    await start()
    await start()

    expect(relativeOrientationSensorMock.start).toHaveBeenCalled()
    expect(relativeOrientationSensorMock.stop).toHaveBeenCalled()
    expect(isActive.value).toBeTruthy()

  })

  it('start - updates currentSensorValue if onreading called', async () => {
    const expectedQuaternion = [1, 2, 3, 4]
    const relativeOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
      quaternion: [0, 0, 0, 0],
      onreading: () => {}
    }
    vi.spyOn(motionSensorsExports, 'RelativeOrientationSensor').mockReturnValue(relativeOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    const { start, currentSensorValue } = useRelativeOrientationSensor()
    await start()
    relativeOrientationSensorMock.quaternion = expectedQuaternion

    relativeOrientationSensorMock.onreading()

    expect(currentSensorValue.value).toStrictEqual(expectedQuaternion)
  })
  it('start - updates error if onerror called', async () => {
    const relativeOrientationSensorMock = {
      start: vi.fn(),
      stop: vi.fn(),
      onerror: (event: Event) => event
    }
    vi.spyOn(motionSensorsExports, 'RelativeOrientationSensor').mockReturnValue(relativeOrientationSensorMock)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)
    const { start, error } = useRelativeOrientationSensor()
    await start()

    const errorEvent = new ErrorEvent('Test', {error: { name: 'NotReadableError'}})
    relativeOrientationSensorMock.onerror(errorEvent)

    expect(error.value).toStrictEqual(new Error('Der Sensor ist nicht verfügbar.'))
  })
})
