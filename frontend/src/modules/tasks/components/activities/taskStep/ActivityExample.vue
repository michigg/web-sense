<template>
  Content
</template>

<script lang="ts" setup>
import { Result } from '@/modules/tasks/models/result'
import { Sensor } from '@/modules/inputs/models/Sensor'
import { SurveyTaskStep } from '@/modules/tasks/models/taskStep'
import { InputType } from '@/modules/inputs/models/inputType'

// Access to task step properties and sensors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  taskStep: SurveyTaskStep,
  sensors: Map<InputType, Sensor>
}>()
// eslint-disable-next-line
const emit = defineEmits<{
  (e: 'submit', value: Array<Result>): void
}>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const submit = async () => {
  // TODO: emit submit event with an array of the results after activity is finished
  const result = new Result()
  emit('submit', [result])
}
</script>

<style scoped>
</style>
