<template>
  <BaseCard :title="question.title">
    <p>{{ question.question }}</p>
    <InputGroup
      v-if="question.type === QuestionType.TEXT"
      :id="question.id"
      v-model="localAnswer"
      label="Antwort"
    />
    <SelectGroup
      v-if="question.type === QuestionType.SINGLE_CHOICE"
      :id="question.id"
      v-model="localAnswer"
      label="Antwort"
      :options="question.options || []"
    />
  </BaseCard>
</template>

<script lang="ts" setup>
import { QuestionType as questionType } from "@/modules/inputs/models/sensors/survey/questionType"
import { computed } from "vue"
import type { Question } from "@/modules/inputs/models/sensors/survey/question"
import { BaseCard, InputGroup, SelectGroup } from "@michigg/component-library"

const props = defineProps<{
  question: Question;
  answer?: string | number | boolean | object;
}>()
const QuestionType = questionType
const emit = defineEmits<{
  (e: "update:answer", value: string | number | boolean | object | undefined): void;
}>()
const localAnswer = computed({
  get: () => props.answer,
  set: (value) => {
    emit("update:answer", value)
  }
})
</script>
