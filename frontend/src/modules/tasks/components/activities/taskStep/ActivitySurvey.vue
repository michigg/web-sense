<template>
  <div>
    <TaskStepInstructionList
      :title="taskStep.title"
      :description="taskStep.description"
      :instructions="taskStep.instructions"
    />
    <form class="survey-section" @submit.prevent="submit">
      <QuestionSection
        v-for="key in Object.keys(questions)"
        :key="key"
        :question="questions[key]"
        v-model:answer="questions[key].answer"
      />
      <ButtonBase type="submit">Weiter</ButtonBase>
    </form>
  </div>
</template>

<script lang="ts" setup>
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { Result } from '@/modules/tasks/models/result'
import { ref } from 'vue'
import { Sensor } from '@/modules/inputs/models/Sensor'
import { GeolocationSensor } from '@/modules/inputs/models/sensors/geolocation/Sensor'
import TaskStepInstructionList from '@/modules/tasks/components/TaskStepInstructionList.vue'
import { SurveyTaskStep } from '@/modules/tasks/models/taskStep'
import { Question } from '@/modules/inputs/models/sensors/survey/question'
import QuestionSection from '@/modules/inputs/models/sensors/survey/components/QuestionSection.vue'
import { InputType } from '@/modules/inputs/models/inputType'

const props = defineProps<{
  taskStep: SurveyTaskStep,
  sensors: Map<InputType, Sensor>
}>()
// eslint-disable-next-line
const emit = defineEmits<{
  (e: 'submit', value: Array<Result>): void
}>()

const questions = ref<{ [key: string]: Question }>({})
for (const [key, question] of props.taskStep.questions) {
  questions.value[key] = question.clone()
}

const submit = async () => {
  const geolocationSensor = props.sensors.get(InputType.GEOLOCATION) as GeolocationSensor
  const location = await geolocationSensor.getLocation()
  const results = []
  for (const [key, value] of Object.entries(questions.value)) {
    const result = new Result()
    result.addMeta('latitude', location.coords.latitude)
    result.addMeta('longitude', location.coords.longitude)
    result.addMeta('accuracy', location.coords.accuracy)
    result.addMeta('questionId', value.id)
    result.addMeta('type', value.type)
    result.addMeta('question', value.question)
    result.addMeta('questionTitle', value.title)
    if (value.answer && typeof value.answer !== 'object') {
      result.addMeasurement(key, value.answer)
    } else if (value.answer) {
      for (const [answerKey, answerValue] of Object.entries(value.answer)) {
        result.addMeasurement(answerKey, answerValue)
      }
    }
    results.push(result)
  }
  emit('submit', results)
}
</script>

<style scoped>
.survey-section {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
button {
  width: 100%;
}
</style>
