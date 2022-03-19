import { RouteRecordRaw } from 'vue-router'
import PageMeasurements from '@/modules/log/pages/PageLog.vue'
import PageMeasurementDetail from '@/modules/log/pages/PageLogElement.vue'

export const measurementsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/log',
    name: 'Measurements',
    component: PageMeasurements
  },
  {
    path: '/log/:taskLogPKey',
    name: 'MeasurementDetail',
    component: PageMeasurementDetail
  }
]
