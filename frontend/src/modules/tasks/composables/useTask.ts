import { computed, ComputedRef, onMounted, Ref, ref } from 'vue'
import { useStore } from '@/store'
import { Task } from '@/modules/tasks/models/task'
import { useRoute } from 'vue-router'

export function useTask (): { busy: Ref<boolean>, error: Ref<Error | undefined>, tasks: ComputedRef<Task[]>, task: ComputedRef<Task>, approveTask: () => Promise<void>, refuseTask: () => Promise<void>, taskExecutionPossible: ComputedRef<boolean> } {
  const store = useStore()
  const route = useRoute()
  const taskId = +route.params.taskId
  const busy = ref(false)
  const error = ref<Error | undefined>(undefined)

  onMounted(async () => {
    try {
      busy.value = true
      error.value = undefined
      await store.dispatch('tasks/fetchTasks')
    } catch (e) {
      error.value = e as Error
    } finally {
      busy.value = false
    }
  })

  const tasks = computed(() => store.getters['tasks/getTasks'])
  const task = computed(() => store.getters['tasks/getTasks'].get(taskId))

  const taskExecutionPossible = computed(() => {
    return store.getters['sensors/sensorsAvailable'](task.value.getInputs())
  })

  const approveTask = async () => {
    await store.dispatch('tasks/setApprovedState', {
      taskId: task.value.id,
      approved: true
    })
  }

  const refuseTask = async () => {
    await store.dispatch('tasks/setApprovedState', {
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
