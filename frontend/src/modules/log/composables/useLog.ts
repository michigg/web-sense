import { computed, ComputedRef, onMounted } from 'vue'
import { useStore } from '@/store'
import { Task } from '@/modules/tasks/models/task'
import { Result } from '@/modules/tasks/models/result'
import { LogTask } from '@/modules/log/models/logTask'

export function useLog (): {
  logs: ComputedRef<Array<LogTask>>,
  addResults: (task: Task, results: Map<number, Result>) => Promise<void>,
  contributeLog: () => Promise<void>
  } {
  const store = useStore()

  onMounted(async () => {
    await store.dispatch('logs/init')
  })
  const logs = computed(() => store.getters['logs/getLogs'])

  const addResults = async (task: Task, results: Map<number, Result>) => {
    await store.dispatch('logs/addTaskResults', {
      task,
      results
    })
  }

  const contributeLog = async () => {
    await store.dispatch('logElement/contribute')
  }

  return {
    logs,
    addResults,
    contributeLog
  }
}
