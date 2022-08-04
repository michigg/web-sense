import { computed } from "vue"
import type { ComputedRef } from "vue"
import type { Task } from "@/modules/tasks/models/task"
import type { LogTask } from "@/modules/log/models/logTask"
import { useTaskExecuteStore } from "@/modules/tasks/store/execute"

export function useTaskFinished (): {
  task: ComputedRef<Task | undefined>
  preview: ComputedRef<LogTask | undefined>
  contributeTask: () => Promise<number>
  saveTask: () => Promise<number>
} {
  const taskExecute = useTaskExecuteStore()

  const task = computed(() => taskExecute.getTask)
  const contributeTask = async () =>
    await taskExecute.save({ contribute: true })
  const saveTask = async () => await taskExecute.save({ contribute: false })
  const preview = computed(() => taskExecute.getLogTask)

  return {
    task,
    preview,
    contributeTask,
    saveTask
  }
}
