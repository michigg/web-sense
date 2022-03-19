import { RouteRecordRaw } from 'vue-router'
import Settings from '@/modules/settings/pages/PageSettings.vue'

export const settingsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]
