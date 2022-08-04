import { createRouter, createWebHistory } from "vue-router"
import { sensorsRoutes } from "@/modules/inputs/routes"
import { tasksRoutes } from "@/modules/tasks/routes"
import { settingsRoutes } from "@/modules/settings/routes"
import { measurementsRoutes } from "@/modules/log/routes"
import { sharedRoutes } from "@/shared/routes"

const routes = [
  ...sharedRoutes,
  ...sensorsRoutes,
  ...tasksRoutes,
  ...measurementsRoutes,
  ...settingsRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
