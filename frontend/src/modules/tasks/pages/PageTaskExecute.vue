<template>
  <LayoutBase
    v-if="!task || !currentActivity || currentTaskStepSensors.size === 0"
    title="Aufgabe"
  >
    Aufgabe wird geladen!
  </LayoutBase>
  <LayoutBase
    v-else
    :title="`${task.title}`"
  >
    <component
      :is="currentActivity"
      :task-step="currentTaskStep"
      :sensors="currentTaskStepSensors"
      class="page-task-execute"
      @submit="submit"
    />
  </LayoutBase>
</template>

<script lang="ts" setup>
import LayoutBase from "@/shared/components/LayoutBase.vue"
import { useTaskRoutes } from "@/modules/tasks/composables/useTaskRoutes"
import { useTask } from "@/modules/tasks/composables/useTaskExecute"
import type { Result } from "@/modules/tasks/models/result"

const { routeToTaskFinished } = useTaskRoutes()
const {
  task,
  currentTaskStep,
  currentTaskStepSensors,
  isLastTaskStep,
  currentActivity,
  nextTaskStep,
  addTaskStepResults
} = useTask()

const submit = async (result: Array<Result>) => {
  try {
    await addTaskStepResults(result)

    if (isLastTaskStep.value && task.value) {
      await routeToTaskFinished(task.value.id)
      return
    }
    await nextTaskStep()
  } catch (e) {
    //  TODO: error handling
    console.error(e)
  }
}
</script>

<style scoped>
.page-task-execute {
  padding-inline: 1rem;
}
</style>
