<script setup lang="ts">
import {useSensorRecord} from "@/modules/log/composables/useSensorRecord"
import {onUnmounted} from "vue"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"
import {BaseButton} from "@lion5/component-library"
import {BaseIcon} from "@michigg/component-library"

const props = defineProps<{
  sensor: AbstractSensorType
}>()

const {isRecording, startRecording, stopRecording, saveRecording, clearRecording} = useSensorRecord(props.sensor)

const onClick = async () => {
  if (!isRecording.value) {
    startRecording()
    clearRecording()
  } else {
    await saveRecording()
    stopRecording()
  }
}

onUnmounted(async () => {
  stopRecording()
})
</script>

<template>
  <BaseButton
    v-if="sensor"
    @click="onClick"
  >
    <template #icon-left>
      <BaseIcon
        v-if="!isRecording"
        icon-key="bi-play-fill"
      />
      <BaseIcon
        v-else
        icon-key="bi-stop-fill"
      />
    </template>
    <span v-if="!isRecording">
      Aufnahme starten
    </span>
    <span v-else>
      Aufnahme stoppen
    </span>
  </BaseButton>
</template>

<style scoped>

</style>
