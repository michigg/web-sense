import { mount, VueWrapper } from "@vue/test-utils"
import InputIcons from "@/modules/inputs/components/InputIcons.vue"
import type { Sensor } from "@/modules/inputs/models/Sensor"
import { SurveySensor } from "@/modules/inputs/models/sensors/survey/Sensor"
import { MicSensor } from "@/modules/inputs/models/sensors/microphone/Sensor"
import { GeolocationSensor } from "@/modules/inputs/models/sensors/geolocation/Sensor"
import { InputType } from "@/modules/inputs/models/inputType"
import { describe, beforeEach, it, expect, vi } from "vitest"
import { createTestingPinia } from "@pinia/testing"
import { useSensorStore } from "../store"
import { DummySensor } from "@/modules/inputs/models/sensors/dummy/Sensor"

describe("InputIcons", () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    const mic = new MicSensor()
    mic.isAvailable = true

    wrapper = mount(InputIcons, {
      props: {
        inputTypes: [InputType.MIC, InputType.SURVEY, InputType.DUMMY]
      },
      global: {
        plugins: [createTestingPinia({createSpy: vi.fn})]
      }
    })
    const store = useSensorStore()
    store.sensors = new Map<InputType, Sensor>([
      [InputType.SURVEY, new SurveySensor()],
      [InputType.MIC, mic],
      [InputType.GEOLOCATION, new GeolocationSensor()],
      [InputType.DUMMY, new DummySensor()]
    ])
  })

  it("renders the icons", async () => {
    const icons = wrapper.findAll(".input-icon")
    expect(icons.length).toBe(3)
  })

  it("renders available sensors as success", async () => {
    const icons = wrapper.findAll(".input-icon.text-success")
    expect(icons.length).toBe(2)
  })

  it("renders available sensors as fail", async () => {
    const icons = wrapper.findAll(".input-icon.text-danger")
    expect(icons.length).toBe(1)
  })
})
