import { RouteRecordRaw } from 'vue-router'
import PageTasks from '@/modules/tasks/pages/PageTasks.vue'
import PageTask from '@/modules/tasks/pages/PageTask.vue'
import PageTaskExecute from '@/modules/tasks/pages/PageTaskExecute.vue'
import PageTaskFinished from '@/modules/tasks/pages/PageTaskFinished.vue'

export const tasksRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tasks',
    component: PageTasks
  },
  {
    path: '/task/:taskId',
    name: 'Task',
    component: PageTask
  },
  {
    path: '/task/:taskId/execute',
    name: 'TaskExecute',
    component: PageTaskExecute
  },
  {
    path: '/task/:taskId/finished',
    name: 'TaskFinished',
    component: PageTaskFinished
  }
]
