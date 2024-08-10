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
  <RecordButton :sensor="relativeOrientationSensor" />
  <ErrorCard :error="error" />
  <BaseList v-if="currentSensorValue">
    <KeyValueListItem
      :key-data="ResultValueKey.QUATERNION"
      :value-data="(currentSensorValue as Quaternion | undefined)"
    />
  </BaseList>
  <OrientationAnimation
    v-if="currentSensorValue"
    :quaternion="(currentSensorValue as Quaternion)"
  />
</template>

<script lang="ts" setup>
import {BaseList, ErrorCard} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import {
  type Quaternion,
  type WebSenseRelativeOrientationSensor
} from "@/modules/inputs/models/sensors/relativeOrientationSensor/Sensor"
import OrientationAnimation from "@/shared/components/OrientationAnimation.vue"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"
import {onUnmounted} from "vue"
import RecordButton from "@/modules/inputs/components/RecordButton.vue"
import {ResultValueKey} from "@/modules/inputs/models/sensors/resultValueKeys"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensorType
}>()

const relativeOrientationSensor = props.sensor as WebSenseRelativeOrientationSensor
relativeOrientationSensor.start({ frequency: 60 })
const { currentSensorValue, error } = relativeOrientationSensor

onUnmounted(async () => {
  await relativeOrientationSensor.stop()
})


</script>

<style scoped></style>
