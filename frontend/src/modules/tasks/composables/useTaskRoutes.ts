import { useRouter } from 'vue-router'

export function useTaskRoutes () {
  const router = useRouter()

  const routeToTasks = async () => {
    await router.push({ name: 'Tasks' })
  }

  const routeToTask = async (taskId: number) => {
    await router.push({
      name: 'Task',
      params: { taskId }
    })
  }

  const routeToTaskExecute = async (taskId: number) => {
    await router.push({
      name: 'TaskExecute',
      params: { taskId }
    })
  }

  const routeToTaskFinished = async (taskId: number) => {
    await router.push({
      name: 'TaskFinished',
      params: { taskId }
    })
  }

  return {
    routeToTasks,
    routeToTask,
    routeToTaskExecute,
    routeToTaskFinished
  }
}
