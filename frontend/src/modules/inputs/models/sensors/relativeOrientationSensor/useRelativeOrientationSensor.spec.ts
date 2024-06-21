import {describe, expect, it} from "vitest"
import {
  useRelativeOrientationSensor
} from "@/modules/inputs/models/sensors/relativeOrientationSensor/useRelativeOrientationSensor"

describe("useRelativeOrientationSensor.ts", () => {
  it('isAvailable - set to false if not in window', async () => {
    const { isAvailable, checkAvailability} = useRelativeOrientationSensor()

    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })

  it('isAvailable - set to false if RelativeOrientationSensor instantiation fails', async () => {
    const { isAvailable, checkAvailability} = useRelativeOrientationSensor()

    await checkAvailability()

    expect(isAvailable.value).toBeFalsy()
  })
})
