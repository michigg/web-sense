import { defineAsyncComponent } from "vue"
import type { ComponentPublicInstance } from "vue"
import type { LogTask } from "@/modules/log/models/logTask"

export function useLogAggregatedResultComponents (logTask: LogTask): {
  activity: ComponentPublicInstance | undefined
} {
  const activityComponentName = logTask.resultAggregationActivityComponentName || 'MarkerAggregationMap'
  const activity: ComponentPublicInstance | undefined = defineAsyncComponent(
    () => import(`../../../modules/tasks/components/activities/resultAggregation/${activityComponentName}.vue`)
  )

  return {
    activity
  }
}
