import type { RouteRecordRaw } from "vue-router"
import PageLog from "@/modules/log/pages/PageLog.vue"
import PageLogElement from "@/modules/log/pages/PageLogElement.vue"

export const measurementsRoutes: Array<RouteRecordRaw> = [
  {
    path: "/log",
    name: "Measurements",
    component: PageLog
  },
  {
    path: "/log/:taskLogPKey",
    name: "MeasurementDetail",
    component: PageLogElement
  }
]
