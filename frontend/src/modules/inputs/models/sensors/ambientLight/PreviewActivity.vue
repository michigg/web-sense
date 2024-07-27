<template>
  <p>
    Source:
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor
    </a>
  </p>
  <h2>Sensor Results</h2>
  <ErrorCard :error="error" />
  <BaseList v-if="illuminance">
    <KeyValueListItem
      key-data="illuminance"
      :value-data="illuminance"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import {BaseList, ErrorCard} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {WebSenseAmbientLightSensor} from "@/modules/inputs/models/sensors/ambientLight/Sensor"
import {onUnmounted} from "vue"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensorType
}>()

const ambientLightSensor = props.sensor as WebSenseAmbientLightSensor
ambientLightSensor.start()
const { currentSensorValue: illuminance, error } = ambientLightSensor

onUnmounted(() => {
  ambientLightSensor.stop()
})
</script>

<style scoped></style>
