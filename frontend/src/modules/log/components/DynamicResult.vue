<template>
  <div v-if="logTask.resultActivityComponentName">
    <component
      :is="taskResultActivity"
      :task="logTask"
    />
  </div>
  <div
    v-else
    class="task-steps"
  >
    <BaseCard
      v-for="(activity, index) in taskStepsResultActivities"
      :key="index"
      :title="logTask.steps[index].title"
      class="task-step"
    >
      <component
        :is="activity"
        :task-step="logTask.steps[index]"
      />
    </BaseCard>
  </div>
</template>

<script lang="ts" setup>
import { useLogResultComponents } from "@/modules/log/composables/useLogResultComponents"
import type { LogTask } from "@/modules/log/models/logTask"
import { BaseCard } from "@michigg/component-library"

const props = defineProps<{ logTask: LogTask }>()

const {
  taskResultActivity,
  taskStepsResultActivities
} =
  useLogResultComponents(props.logTask)
</script>

<style scoped>
.task-steps {
  display: flex;
  flex-flow: column;
  gap: 2rem;
}

.task-step {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
</style>
