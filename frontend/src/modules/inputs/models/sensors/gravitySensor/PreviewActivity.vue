<template>
  <p>
    Source:
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor
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
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {BaseList, ErrorCard} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import {WebSenseGravitySensor} from "@/modules/inputs/models/sensors/gravitySensor/Sensor"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const gravitySensor = props.sensor as WebSenseGravitySensor
const {
  currentSensorValue,
  error
} = gravitySensor.start({ frequency: 60 })

const toFixedDecimals = (value?: number | null) => {
  if (!value) return
  return value.toLocaleString('de-DE', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })
}
</script>

<style scoped></style>
