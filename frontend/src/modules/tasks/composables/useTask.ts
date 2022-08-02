import { computed, onMounted, ref } from "vue"
import type { ComputedRef, Ref } from "vue"
import type { Task } from "@/modules/tasks/models/task"
import { useRoute } from "vue-router"
import { useTasksStore } from "@/modules/tasks/store/tasks"
import { useSensorStore } from "@/modules/inputs/store"

export function useTask (): {
  busy: Ref<boolean>
  error: Ref<Error | undefined>
  tasks: ComputedRef<Map<number, Task>>
  task: ComputedRef<Task | undefined>
  approveTask: () => Promise<void>
  refuseTask: () => Promise<void>
  taskExecutionPossible: ComputedRef<boolean>
} {
  const tasksStore = useTasksStore()
  const sensorStore = useSensorStore()
  const route = useRoute()
  const taskId = +route.params.taskId
  const busy = ref(false)
  const error = ref<Error | undefined>(undefined)

  onMounted(async () => {
    try {
      busy.value = true
      error.value = undefined
      await tasksStore.fetchTasks()
    } catch (e) {
      error.value = e as Error
    } finally {
      busy.value = false
    }
  })

  const tasks = computed(() => tasksStore.getTasks)
  const task = computed(() => tasksStore.getTasks.get(taskId))

  const taskExecutionPossible = computed(() => {
    if (task.value == null) {
      throw new Error("Es wurde leider keine Aufgabe gefunden.")
    }
    return sensorStore.sensorsAvailable(task.value.getInputs())
  })

  const approveTask = async () => {
    if (task.value == null) {
      throw new Error("Es wurde leider keine Aufgabe gefunden.")
    }
    await tasksStore.setApproved({
      taskId: task.value.id,
      approved: true
    })
  }

  const refuseTask = async () => {
    if (task.value == null) {
      throw new Error("Es wurde leider keine Aufgabe gefunden.")
    }
    await tasksStore.setApprovedState({
      taskId: task.value.id,
      approved: false
    })
  }

  return {
    busy,
    error,
    tasks,
    task,
    approveTask,
    refuseTask,
    taskExecutionPossible
  }
}
