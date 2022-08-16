<template>
  <div class="noise-measurement-activity">
    <TaskStepInstructionList
      :title="taskStep.title"
      :description="taskStep.description"
      :instructions="taskStep.instructions"
    />
    <ErrorCard :error="measuringError" />
    <ButtonSoundAnimation
      :busy="busy"
      :success="success"
      :info="info"
      @click="measure"
    />
  </div>
</template>

<script lang="ts" setup>
import ButtonSoundAnimation from "@/shared/components/ButtonSoundAnimation.vue"
import { ref } from "vue"
import type { Sensor } from "@/modules/inputs/models/Sensor"
import type { MicSensor } from "@/modules/inputs/models/sensors/microphone/Sensor"
import { MicAnalyzer } from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/MicAnalyzer"
import { Result } from "@/modules/tasks/models/result"
import type { GeolocationSensor } from "@/modules/inputs/models/sensors/geolocation/Sensor"
import { AudioCalculations } from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculations"
import TaskStepInstructionList from "@/modules/tasks/components/TaskStepInstructionList.vue"
import type { SensorTaskStep } from "@/modules/tasks/models/taskStep"
import { InputType } from "@/modules/inputs/models/inputType"
import { ErrorCard } from "@michigg/component-library"

const props = defineProps<{
  taskStep: SensorTaskStep;
  sensors: Map<InputType, Sensor>;
}>()
// eslint-disable-next-line
const emit = defineEmits<{
  (e: "submit", value: Array<Result>): void;
}>()

const busy = ref(false)
const success = ref(false)
const initialButtonText = "Lärmaufnahme starten"
const info = ref(initialButtonText)
const geolocationSensor = props.sensors.get(
  InputType.GEOLOCATION
) as GeolocationSensor
const measuringError = ref<Error | undefined>()
geolocationSensor.getPermission()
const micSensor = props.sensors.get(InputType.MIC) as MicSensor
micSensor.getPermission()

const measure = async () => {
  busy.value = true
  // busy.value = false
  success.value = false
  measuringError.value = undefined
  info.value = "Lärm wird aufgenommen..."

  try {
    const micAnalyzer = new MicAnalyzer(micSensor)
    console.info("micAnalyzer created")
    const analysisTimeInSeconds = 10
    const analysisData = await micAnalyzer.analyze(analysisTimeInSeconds)
    console.info("analysisData retrieved")
    const location = await geolocationSensor.getLocation()
    console.info("location retrieved")

    const result = new Result()
    result.addMeta("sampleRate", micSensor.sampleRate)
    result.addMeta("bufferSize", micSensor.bufferSize)
    result.addMeta(
      "windowingFunction",
      micAnalyzer.analysisConfig.windowingFunction
    )
    result.addMeta(
      "lowestPerceptibleFrequency",
      micAnalyzer.analysisConfig.lowestPerceptibleFrequency
    )
    result.addMeta(
      "highestPerceptibleFrequency",
      micAnalyzer.analysisConfig.highestPerceptibleFrequency
    )
    console.info("write metadata")
    result.addMeasurement("latitude", location.coords.latitude)
    result.addMeasurement("longitude", location.coords.longitude)
    result.addMeasurement(
      "accuracy",
      Number(location.coords.accuracy.toFixed(2))
    )
    const analysisResults = AudioCalculations.getResult(
      analysisData.getAmplitudeSpectrumList(),
      micSensor.sampleRate,
      micSensor.bufferSize
    )
    console.info("write results", analysisResults)
    result.addMeasurement("minDBA", analysisResults.minDBA)
    result.addMeasurement("maxDBA", analysisResults.maxDBA)
    result.addMeasurement("averageDBA", analysisResults.averageDBA)
    result.addMeasurement("minDB", analysisResults.minDB)
    result.addMeasurement("maxDB", analysisResults.maxDB)
    result.addMeasurement("averageDB", analysisResults.averageDB)
    console.info("write log")
    success.value = true
    emit("submit", [result])
  } catch (e) {
    console.error(e)
    measuringError.value = e as Error
    success.value = false
  } finally {
    busy.value = false
    info.value = initialButtonText
  }
}
</script>

<style scoped>
.noise-measurement-activity {
  display: flex;
  flex-flow: column;
  gap: 2rem;
}
</style>
