import { computed, ComputedRef } from 'vue'
import { useStore } from '@/store'
import { Task } from '@/modules/tasks/models/task'
import { LogTask } from '@/modules/log/models/logTask'

export function useTaskFinished (): {
  task: ComputedRef<Task>,
  preview: ComputedRef<LogTask>
  contributeTask: () => Promise<number>,
  saveTask: () => Promise<number>
  } {
  const store = useStore()

  const task = computed(() => store.getters['taskExecute/getTask'])
  const contributeTask = async () => await store.dispatch('taskExecute/save', { contribute: true })
  const saveTask = async () => await store.dispatch('taskExecute/save', { contribute: false })
  const preview = computed(() => store.getters['taskExecute/getLogTask'])

  return {
    task,
    preview,
    contributeTask,
    saveTask
  }
}
