import type { RouteRecordRaw } from "vue-router"
import PageLog from "@/modules/log/pages/PageLog.vue"
import PageLogElement from "@/modules/log/pages/PageLogElement.vue"
import PageLogTaskAggregated from "@/modules/log/pages/PageLogTaskAggregated.vue"

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
  },
  {
    path: "/aggregation/:taskId",
    name: "TaskAggregatedMeasurements",
    component: PageLogTaskAggregated
  }
]
