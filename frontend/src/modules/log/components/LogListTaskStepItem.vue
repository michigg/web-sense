<template>
  <li class="log-list-task-item">
    <p class="row-1">
      <span>
        <span>{{ toDateTime(logTaskStep.timestamp) }}</span>
        <span>{{ logTaskStep.id }}</span>
      </span>
      <span>
        <span>{{ logTaskStep.title }}</span>
        <InputIcons :input-types="logTaskStep.inputTypes" />
      </span>
    </p>
    <BaseList class="list-task-step-result">
      <LogListTaskStepResultItem
        v-for="(taskStepResult, index) of logTaskStep.results"
        :key="index"
        :result="taskStepResult"
      />
    </BaseList>
  </li>
</template>

<script lang="ts" setup>
import InputIcons from "@/modules/inputs/components/InputIcons.vue"
import { useDateTime } from "@/shared/composables/useDateTime"
import LogListTaskStepResultItem from "@/modules/log/components/LogListTaskStepResultItem.vue"
import type { LogTaskStep } from "@/modules/log/models/logTaskStep"
import { BaseList } from "@michigg/component-library"

defineProps<{
  logTaskStep: LogTaskStep;
}>()

const { toDateTime } = useDateTime()
</script>

<style scoped>
h3 {
  font-size: 1.25rem;
  font-weight: 700;
}

p {
  display: flex;
  justify-content: space-between;
}

.log-list-task-item {
  display: flex;
  flex-flow: column;
  padding: 1rem 2rem;
  background-color: var(--color-surface-3);
}

.log-list-task-item .row-1 {
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  justify-content: space-between;
}

.log-list-task-item .row-1 > span {
  display: flex;
  justify-content: space-between;
}

.list-task-step-result {
  display: flex;
  flex-flow: column;
  gap: 2rem;
}
</style>
