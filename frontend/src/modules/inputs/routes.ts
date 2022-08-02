import type { RouteRecordRaw } from "vue-router"
import PageSensors from "@/modules/inputs/pages/PageSensors.vue"

export const sensorsRoutes: Array<RouteRecordRaw> = [
  {
    path: "/inputs",
    name: "Sensors",
    component: PageSensors
  }
]
