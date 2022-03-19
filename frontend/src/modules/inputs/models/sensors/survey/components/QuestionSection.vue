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
      :options="question.options"
    />
  </BaseCard>
</template>

<script lang="ts" setup>
import { QuestionType as questionType } from '@/modules/inputs/models/sensors/survey/questionType'
import { computed } from 'vue'
import BaseCard from '@/shared/components/cards/BaseCard.vue'
import { Question } from '@/modules/inputs/models/sensors/survey/question'
import InputGroup from '@/shared/components/inputs/InputGroup.vue'
import SelectGroup from '@/shared/components/inputs/SelectGroup.vue'

const props = defineProps<{
  question: Question
  answer?: string | object
}>()
const QuestionType = questionType
// eslint-disable-next-line
const emit = defineEmits<{
  (e: 'update:answer', value: string | object | undefined): void
}>()
const localAnswer = computed({
  get: () => props.answer,
  set: (value) => {
    console.log('Set', value)
    emit('update:answer', value)
  }
})
</script>
