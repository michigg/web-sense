import type {ShallowRef} from "vue"
import {onMounted, type Ref, ref, shallowRef} from "vue"
import {useRoute} from "vue-router"
import type {Sensor} from "@/modules/inputs/models/Sensor"
import type {InputType} from "@/modules/inputs/models/inputType"
import {useSensorStore} from "@/modules/inputs/store"

export function useSensorPreview(): {
  sensor: Ref<Sensor | undefined>
  previewActivity: ShallowRef<object | undefined>
} {
  const route = useRoute()
  const sensor = ref<Sensor | undefined>()
  const previewActivity = shallowRef<object | undefined>(undefined)

  onMounted(async () => {
    console.log("Display preview")
    const inputType = route.params.inputType as InputType
    const sensorStore = useSensorStore()
    sensor.value = sensorStore.getSensor(inputType)
    if (!sensor.value || !sensor.value.sensorPath) {
      console.error("Preview cannot be loaded")
      return // TODO: throw error?
    }
    const value = await import(`../models/sensors/${sensor.value.sensorPath}/PreviewActivity.vue`)

    previewActivity.value = value.default
    console.log(previewActivity.value, typeof previewActivity.value)
  })


  return {
    previewActivity,
    sensor
  }
}
