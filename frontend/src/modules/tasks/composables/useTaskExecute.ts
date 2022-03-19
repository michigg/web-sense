import { computed, ComputedRef, onMounted, ShallowRef, shallowRef, watchEffect } from 'vue'
import { useStore } from '@/store'
import { Task } from '@/modules/tasks/models/task'
import { useRoute } from 'vue-router'
import { Result, TaskStepResult } from '@/modules/tasks/models/result'
import { Sensor } from '@/modules/inputs/models/Sensor'
import { SensorTaskStep, SurveyTaskStep } from '@/modules/tasks/models/taskStep'
import { InputType } from '@/modules/inputs/models/inputType'

export function useTask (): {
  task: ComputedRef<Task>,
  currentTaskStep: ComputedRef<SurveyTaskStep | SensorTaskStep>,
  currentTaskStepSensors: ComputedRef<Map<InputType, Sensor>>,
  isLastTaskStep: ComputedRef<boolean>,
  currentActivity: ShallowRef<object | undefined>,
  nextTaskStep: () => void,
  addTaskStepResults: (results: Array<Result>) => void,
  saveTask: () => Promise<any>,
  abortTask: () => Promise<void>
  } {
  const store = useStore()
  const route = useRoute()
  const taskId = +route.params.taskId
  const currentActivity = shallowRef<object | undefined>(undefined)

  onMounted(async () => {
    await store.dispatch('tasks/fetchTasks')
    await store.dispatch('taskExecute/init', taskId)
    // Add watcher after execute task store is initialized to prevent display cached task
    watchEffect(async () => {
      if (currentTaskStep.value) {
        const value = await import(`../components/activities/taskStep/${currentTaskStep.value.activityComponentName}.vue`)
        currentActivity.value = value.default
        console.log(currentActivity.value, typeof currentActivity.value)
      }
    })
  })
  const task = computed(() => store.getters['taskExecute/getTask'])
  const isLastTaskStep = computed(() => store.getters['taskExecute/isLastTaskStep'])
  const currentTaskStep = computed(() => store.getters['taskExecute/getCurrentTaskStep'])
  const currentTaskStepSensors = computed(() => store.getters['taskExecute/getCurrentTaskStepSensors'])
  const nextTaskStep = () => store.dispatch('taskExecute/nextTaskStep')
  const addTaskStepResults = async (results: Array<Result>) => {
    const taskStepResult = new TaskStepResult(
      currentTaskStep.value.clone(),
      results
    )
    await store.dispatch('taskExecute/addResult', taskStepResult)
  }
  const saveTask = () => store.dispatch('taskExecute/save')
  const abortTask = async () => await store.dispatch('taskExecute/init')

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
