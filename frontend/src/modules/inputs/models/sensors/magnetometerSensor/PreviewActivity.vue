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
import type {WebSenseAccelerometerSensor} from "@/modules/inputs/models/sensors/accelerometerSensor/Sensor"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const accelerometerSensor = props.sensor as WebSenseAccelerometerSensor
const {
  currentSensorValue,
  error
} = accelerometerSensor.start({ frequency: 60 })

const toFixedDecimals = (value?: number | null) => {
  if (!value) return
  return value.toLocaleString('de-DE', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })
}
</script>

<style scoped></style>
