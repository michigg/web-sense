<template>
  <p>
    Source:
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor
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
    <KeyValueListItem
      key-data="accel.x (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue.w)"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {BaseList, ErrorCard} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {WebSenseAbsoluteOrientationSensor} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/Sensor"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const absoluteOrientationSensor = props.sensor as WebSenseAbsoluteOrientationSensor
const {
  currentSensorValue,
  error
} = absoluteOrientationSensor.start({ frequency: 60, referenceFrame: 'device'})

const toFixedDecimals = (value?: number | null) => {
  if (!value) return
  return value.toLocaleString('de-DE', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })
}
</script>

<style scoped></style>
