import type { RouteRecordRaw } from "vue-router"
import PageSensors from "@/modules/inputs/pages/PageSensors.vue"
import PageSensorPreview from "@/modules/inputs/pages/PageSensorPreview.vue"

export const sensorsRoutes: Array<RouteRecordRaw> = [
  {
    path: "/inputs",
    name: "Sensors",
    component: PageSensors
  },
  {
    path: "/input/:inputType",
    name: "SensorPreview",
    component: PageSensorPreview
  }
]
