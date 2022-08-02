import type { RouteRecordRaw } from "vue-router"

export const sharedRoutes: Array<RouteRecordRaw> = [
  {
    path: "/imprint",
    name: "Imprint",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/shared/pages/PageImprint.vue")
  },
  {
    path: "/privacy",
    name: "Privacy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/shared/pages/PagePrivacy.vue")
  }
]
