import type {ShallowRef} from "vue"
import {onMounted, type Ref, ref, shallowRef} from "vue"
import {useRoute} from "vue-router"
import type {InputType} from "@/modules/inputs/models/inputType"
import {useSensorStore} from "@/modules/inputs/store"
import type {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"

export function useSensorPreview(): {
  sensor: Ref<AbstractSensor<unknown, unknown, unknown> | undefined>
  previewActivity: ShallowRef<object | undefined>
} {
  const route = useRoute()
  const sensor = ref<AbstractSensor<unknown, unknown, unknown> | undefined>()
  const previewActivity = shallowRef<object | undefined>(undefined)

  onMounted(async () => {
    console.log("Display preview")
    const inputType = route.params.inputType as InputType
    const sensorStore = useSensorStore()
    sensor.value = sensorStore.getSensor(inputType)
    console.log('Sensor', sensor.value, sensor.value?.isAvailable.value)
    if (!sensor.value || !sensor.value.sensorPath) {
      console.error("Preview cannot be loaded")
      return // TODO: throw error?
    }
    const value = await import(`../models/sensors/${sensor.value.sensorPath}/PreviewActivity.vue`)

    previewActivity.value = value.default
  })


  return {
    previewActivity,
    sensor
  }
}
