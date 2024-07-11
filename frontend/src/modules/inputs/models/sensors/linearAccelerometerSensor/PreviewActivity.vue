<template>
  <p>
    Source:
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor
    </a>
  </p>
  <h2>Sensor Results</h2>
  <ErrorCard :error="error" />
  <BaseList v-if="currentSensorValue">
    <KeyValueListItem
      key-data="accelGrav.x (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue.x)"
    />
    <KeyValueListItem
      key-data="accelGrav.y (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue.y)"
    />
    <KeyValueListItem
      key-data="accelGrav.z (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue.z)"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import {BaseList, ErrorCard} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {WebSenseAccelerometerSensor} from "@/modules/inputs/models/sensors/accelerometerSensor/Sensor"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"
import {onUnmounted} from "vue"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensorType
}>()

const accelerometerSensor = props.sensor as WebSenseAccelerometerSensor
accelerometerSensor.start({ frequency: 60 })
const {currentSensorValue, error} = accelerometerSensor

const toFixedDecimals = (value?: number | null) => {
  if (!value) return
  return value.toLocaleString('de-DE', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })
}

onUnmounted(async () => {
  await accelerometerSensor.stop()
})
</script>

<style scoped></style>
