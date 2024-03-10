<template>
  <h2>Device Motion Sensor Results</h2>
  <BaseList>
    <KeyValueListItem
      key-data="accelGrav.x (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue?.x)"
    />
    <KeyValueListItem
      key-data="accelGrav.y (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue?.y)"
    />
    <KeyValueListItem
      key-data="accelGrav.z (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue?.z)"
    />
    <KeyValueListItem
      key-data="accel.x (m/s^2)"
      :value-data="toFixedDecimals(currentSensorValue?.w)"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {BaseList} from "@michigg/component-library"
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
