<template>
  <ErrorCard :error="error"/>
  <LoadingCard
    v-if="busy"
    title="Sensorvorschau wird geladen"
  />
  <label for="recording-time-input">Aufnahmezeit in Sekunden</label>
  <input
    id="recording-time-input"
    v-model="analysisTimeInSeconds"
    type="number"
    min="1"
    step="1"
  >
  <div>
    <ButtonSoundAnimation
      :busy="micBusy"
      :info="micButtonLabel"
      @click="measure"
    />
  </div>
  <section v-if="result">
    <h2>Ergebnisse</h2>
    <BaseList>
      <KeyValueListItem
        v-for="(value, key) in result"
        :key="key"
        :key-data="key"
        :value-data="value"
      />
    </BaseList>
  </section>
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {onMounted, ref, watch} from "vue"
import {useEntityState} from "@/shared/composables/useEntityState"
import {LoadingCard, ErrorCard, BaseList} from "@michigg/component-library"
import type {MicSensor} from "@/modules/inputs/models/sensors/microphone/Sensor"
import {MicAnalyzer} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/MicAnalyzer"
import {AudioCalculations} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculations"
import ButtonSoundAnimation from "@/shared/components/ButtonSoundAnimation.vue"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const {busy, setBusy, setIdle, error, setError} = useEntityState()
onMounted(async () => {
  setBusy()
  const micSensor = props.sensor as MicSensor
  const permissionState = await micSensor.getPermission()
  if (permissionState === 'denied') {
    setError(new Error("Zugriff auf das Microphone verweigert."))
    return
  }
  setIdle()
})

const analysisTimeInSeconds = ref(1)
const {
  busy: micBusy,
  setBusy: setMicBusy,
  setIdle: setMicIdle,
  error: micError,
  setError: setMicError,
  clearError: clearMicError
} = useEntityState()
const result = ref()
const micButtonLabel = ref()
watch(micBusy, (currentBusy) => {
  micButtonLabel.value = currentBusy ? "Zeichne auf" : "Live Preview starten"
}, {immediate: true})
const measure = async () => {
  setMicBusy()
  clearMicError()
  try {
    const micSensor = props.sensor as MicSensor
    const micAnalyzer = new MicAnalyzer(micSensor)
    console.info("micAnalyzer created")
    const analysisData = await micAnalyzer.analyze(analysisTimeInSeconds.value)
    const analysisResults = AudioCalculations.getResult(
      analysisData.getAmplitudeSpectrumList(),
      micSensor.sampleRate,
      micSensor.bufferSize
    )

    result.value = {
      sampleRate: micSensor.sampleRate,
      bufferSize: micSensor.bufferSize,
      windowingFunction: micAnalyzer.analysisConfig.windowingFunction,
      lowestPerceptibleFrequency: micAnalyzer.analysisConfig.lowestPerceptibleFrequency,
      highestPerceptibleFrequency: micAnalyzer.analysisConfig.highestPerceptibleFrequency,
      minDBA: analysisResults.minDBA,
      maxDBA: analysisResults.maxDBA,
      averageDBA: analysisResults.averageDBA,
      minDB: analysisResults.minDB,
      maxDB: analysisResults.maxDB,
      averageDB: analysisResults.averageDB
    }
  } catch (e) {
    console.error(e)
    setMicError(e as Error)
  } finally {
    setMicIdle()
  }
}
</script>

<style scoped></style>
