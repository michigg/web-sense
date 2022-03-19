import { ComponentPublicInstance, defineAsyncComponent } from 'vue'
import { LogTask } from '@/modules/log/models/logTask'

export function useLogResultComponents (logTask: LogTask): {
  taskResultActivity: ComponentPublicInstance | undefined,
  taskStepsResultActivities: ComponentPublicInstance[]
} {
  let taskResultActivity: ComponentPublicInstance | undefined
  if (logTask.resultActivityComponentName) {
    taskResultActivity = defineAsyncComponent(() => import(`@/modules/tasks/components/activities/result/task/${logTask.resultActivityComponentName}.vue`))
  }

  const taskStepsResultActivities: ComponentPublicInstance[] = []
  for (const taskStep of logTask.steps) {
    console.log('TASK STEP')
    console.log(taskStep)
    console.log(taskStep.resultActivityComponentName)
    const activity = defineAsyncComponent(() => import(`@/modules/tasks/components/activities/result/taskStep/${taskStep.resultActivityComponentName}.vue`))
    taskStepsResultActivities.push(activity)
  }

  return {
    taskResultActivity,
    taskStepsResultActivities
  }
}
