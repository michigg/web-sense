import { RouteRecordRaw } from 'vue-router'
import Sensors from '@/modules/inputs/pages/PageSensors.vue'

export const sensorsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/inputs',
    name: 'Sensors',
    component: Sensors
  }
]
