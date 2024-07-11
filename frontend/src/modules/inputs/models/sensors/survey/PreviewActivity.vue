<template>
  <p>
    Source:
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/RelativeOrientationSensor"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://developer.mozilla.org/en-US/docs/Web/API/RelativeOrientationSensor
    </a>
  </p>
  <ActivitySurvey
    :sensors="sensors"
    :task-step="taskStep"
    @submit="onSubmit"
  />
  <div v-if="results">
    <p>{{ results }}</p>
    <BaseButton
      type="button"
      style="--color-surface-button: var(--color-primary)"
      @click="onReset"
    >
      Nochmal versuchen
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import ActivitySurvey from "@/modules/tasks/components/activities/taskStep/ActivitySurvey.vue"
import {useSensorStore} from "@/modules/inputs/store"
import {SurveyTaskStep} from "@/modules/tasks/models/taskStep"
import {Question} from "@/modules/inputs/models/sensors/survey/question"
import {QuestionType} from "@/modules/inputs/models/sensors/survey/questionType"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"
import {ref} from "vue"
import {Result} from "@/modules/tasks/models/result"
import {BaseButton} from "@michigg/component-library"

defineProps<{
  sensor: AbstractSensorType
}>()

const sensors = useSensorStore().sensors
const taskStep = new SurveyTaskStep(
  'survey-preview',
  'Beispielumfrage',
  'Beispielumfrage',
  [
    {
      title: 'Startinstruktionen',
      description: 'Hier könnten deine Startinstruktionen stehen'
    }
  ],
  new Map([
    ['question-1', new Question(
      'q1',
      QuestionType.TEXT,
      'Beispielumfrage',
      'Wie findest du die Beispielumfrage?'
    )]
  ])
)

const results = ref<Result[]>()
const onSubmit = (newResults: Result[]) => {
  results.value = newResults
}

const onReset = () => {
  results.value = undefined
}
</script>

<style scoped></style>
