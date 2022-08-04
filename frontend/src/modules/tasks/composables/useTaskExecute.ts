import { computed, onMounted, shallowRef, watchEffect } from "vue"
import type { ComputedRef, ShallowRef } from "vue"
import type { Task } from "@/modules/tasks/models/task"
import { useRoute } from "vue-router"
import { Result, TaskStepResult } from "@/modules/tasks/models/result"
import type { Sensor } from "@/modules/inputs/models/Sensor"
import type {
  SensorTaskStep,
  SurveyTaskStep
} from "@/modules/tasks/models/taskStep"
import type { InputType } from "@/modules/inputs/models/inputType"
import { useTasksStore } from "@/modules/tasks/store/tasks"
import { useTaskExecuteStore } from "@/modules/tasks/store/execute"

export function useTask (): {
  task: ComputedRef<Task | undefined>
  currentTaskStep: ComputedRef<SurveyTaskStep | SensorTaskStep | undefined>
  currentTaskStepSensors: ComputedRef<Map<InputType, Sensor>>
  isLastTaskStep: ComputedRef<boolean>
  currentActivity: ShallowRef<object | undefined>
  nextTaskStep: () => void
  addTaskStepResults: (results: Array<Result>) => void
  saveTask: () => Promise<number>
  abortTask: () => Promise<void>
} {
  const tasksStore = useTasksStore()
  const taskExecuteStore = useTaskExecuteStore()
  const route = useRoute()
  const taskId = +route.params.taskId
  const currentActivity = shallowRef<object | undefined>(undefined)

  onMounted(async () => {
    await tasksStore.fetchTasks()
    await taskExecuteStore.initTask(taskId)
    // Add watcher after execute task store is initialized to prevent display cached task
    watchEffect(async () => {
      if (currentTaskStep.value) {
        const value = await import(
          `../components/activities/taskStep/${currentTaskStep.value.activityComponentName}.vue`
          )
        currentActivity.value = value.default
        console.log(currentActivity.value, typeof currentActivity.value)
      }
    })
  })
  const task = computed(() => taskExecuteStore.getTask)
  const isLastTaskStep = computed(() => taskExecuteStore.isLastTaskStep || false)
  const currentTaskStep = computed(() => taskExecuteStore.getCurrentTaskStep)
  const currentTaskStepSensors = computed(
    () => taskExecuteStore.getCurrentTaskStepSensors
  )
  const nextTaskStep = () => taskExecuteStore.nextTaskStep()
  const addTaskStepResults = async (results: Array<Result>) => {
    if (currentTaskStep.value == null) {
      throw new Error("Kein Aufgabenschritt gefunden.")
    }
    const taskStepResult = new TaskStepResult(
      currentTaskStep.value.clone(),
      results
    )
    taskExecuteStore.addResult(taskStepResult)
  }
  const saveTask = (contribute = false) =>
    taskExecuteStore.save({ contribute })
  const abortTask = async () => await taskExecuteStore.init()

  return {
    task,
    currentTaskStep,
    currentTaskStepSensors,
    isLastTaskStep,
    currentActivity,
    nextTaskStep,
    addTaskStepResults,
    saveTask,
    abortTask
  }
}
