import type { RouteRecordRaw } from "vue-router"
import PageSettings from "@/modules/settings/pages/PageSettings.vue"

export const settingsRoutes: Array<RouteRecordRaw> = [
  {
    path: "/settings",
    name: "Settings",
    component: PageSettings
  }
]
