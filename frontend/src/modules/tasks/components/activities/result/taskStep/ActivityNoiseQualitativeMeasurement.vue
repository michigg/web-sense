<template>
  <BaseList class="survey-questions">
    <li
      v-for="(taskStepResult, index) of taskStep.results"
      :key="index"
      class="survey-question"
    >
      <h3>{{ questionTitle(taskStepResult.metas) }}</h3>
      <p>
        <strong>Frage:</strong><br>
        {{ questionDescription(taskStepResult.metas) }}
      </p>
      <p>
        <strong>Antwort:</strong><br>
        <span v-if="questionAnswer(taskStepResult.measurements)">
          {{ questionAnswer(taskStepResult.measurements) }}
        </span>
        <span v-else>Keine Angabe</span>
      </p>
    </li>
  </BaseList>
  <DropdownMetaData :log-task-step="taskStep" />
</template>

<script lang="ts" setup>
import type { LogTaskStep } from "@/modules/log/models/logTaskStep"
import DropdownMetaData from "@/modules/log/components/DropdownMetaData.vue"
import { BaseList } from "@michigg/component-library"

// Access to task step properties and sensors
defineProps<{
  taskStep: LogTaskStep;
}>()

const questionTitle = (metas: Map<string, number | string | boolean>) =>
  metas.get("questionTitle")
const questionDescription = (metas: Map<string, number | string | boolean>) =>
  metas.get("question")
const questionAnswer = (
  measurements: Map<string, number | string | boolean>
) => {
  const answers = []
  for (const [answerKey, answerValue] of measurements.entries()) {
    if (answerKey !== "value") {
      answers.push(answerValue)
    }
  }
  return answers.join(",")
}
</script>

<style scoped>
.survey-questions {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.survey-question {
  display: flex;
  flex-flow: column;
  gap: 0.75rem;
  background-color: var(--color-surface-3);
  padding: 1rem 1rem;
}
</style>
