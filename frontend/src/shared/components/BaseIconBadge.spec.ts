import { mount, VueWrapper } from "@vue/test-utils"
import IconBadge from "@/shared/components/BaseIconBadge.vue"
import { describe, beforeEach, afterEach, it, expect } from "vitest"

describe("IconBadge", () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(IconBadge, {
      props: {
        iconKey: "testIconClass"
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it("renders with given icon class", async () => {
    const icon = wrapper.find("[data-test=\"badge\"] [data-test=\"icon\"]")
    expect(icon.classes()).toContain("testIconClass")
  })
})
