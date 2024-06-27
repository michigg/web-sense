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
    const { isAvailable, checkAvailability} = useRelativeOrientationSensor()

    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })
  it('isAvailable - set to false if RelativeOrientationSensor instantiation fails', async () => {
    const { isAvailable, checkAvailability} = useRelativeOrientationSensor()
    Object.defineProperty(window, "RelativeOrientationSensor", {})
    vi.spyOn(motionSensorsExports, 'RelativeOrientationSensor').mockImplementationOnce(() => {
      // whatever suites you from first two examples
      throw new Error()
    })
    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })
  it('isAvailable - set to true if RelativeOrientationSensor instantiation succeed', async () => {
    const { isAvailable, checkAvailability} = useRelativeOrientationSensor()
    Object.defineProperty(window, "RelativeOrientationSensor", {})
    await checkAvailability()

    expect(isAvailable.value).toBeTruthy()
  })

  it('getPermission - returns granted if all permissions granted', async () => {
    const { getPermission} = useRelativeOrientationSensor()
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValue({ state: 'granted' } as PermissionStatus)

    const permissionState = await getPermission()

    expect(permissionState).toBe('granted')
  })
  it('getPermission - returns denide if one permissions is denied', async () => {
    const { getPermission} = useRelativeOrientationSensor()
    navigator.permissions = { query: vi.fn() }
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'granted' } as PermissionStatus)
    vi.spyOn(navigator.permissions, 'query').mockResolvedValueOnce({ state: 'denied' } as PermissionStatus)

    const permissionState = await getPermission()

    expect(permissionState).toBe('denied')
  })
})
