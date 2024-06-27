<template>
  <p>
    Source:
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/RelativeOrientationSensor"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://developer.mozilla.org/en-US/docs/Web/API/RelativeOrientationSensor
    </a>
  </p>
  <h2>Sensor Results</h2>
  <ErrorCard :error="error" />
  <BaseList v-if="currentSensorValue">
    <KeyValueListItem
      key-data="Quaternion"
      :value-data="(currentSensorValue as Quaternion | undefined)"
    />
  </BaseList>
  <OrientationAnimation
    v-if="currentSensorValue"
    :quaternion="(currentSensorValue as Quaternion)"
  />
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {BaseList, ErrorCard} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import { type WebSenseRelativeOrientationSensor} from "@/modules/inputs/models/sensors/relativeOrientationSensor/Sensor"
import type {Quaternion} from "@/modules/inputs/models/sensors/relativeOrientationSensor/useRelativeOrientationSensor"
import OrientationAnimation from "@/shared/components/OrientationAnimation.vue"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const relativeOrientationSensor = props.sensor as WebSenseRelativeOrientationSensor
const {
  currentSensorValue,
  error
} = relativeOrientationSensor.start({ frequency: 60 })
</script>

<style scoped></style>
