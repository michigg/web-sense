import { MicSensor } from "./Sensor"
import { EmptyEnumerateDeviceMock, EnumerateAudioDeviceMock, GetUserMediaMock } from "../__mocks__/media"
import { beforeEach, describe, expect, it } from "vitest"

describe("MicSensor", () => {
  let sensor: MicSensor

  beforeEach(() => {
    sensor = new MicSensor()
  })

  it("returns true if sensors is available", async () => {
    Object.defineProperty(window.navigator, "mediaDevices", {
      value: {
        enumerateDevices: EnumerateAudioDeviceMock,
        getUserMedia: GetUserMediaMock
      },
      configurable: true
    })

    expect(sensor.isAvailable).toBe(false)
    await sensor.checkAvailability()
    expect(sensor.isAvailable).toBe(true)
  })

  it("returns false if sensors is available", async () => {
    Object.defineProperty(window.navigator, "mediaDevices", {
      value: {
        enumerateDevices: EmptyEnumerateDeviceMock,
        getUserMedia: GetUserMediaMock
      },
      configurable: true
    })

    await sensor.checkAvailability()
    expect(sensor.isAvailable).toBe(false)
  })
})
