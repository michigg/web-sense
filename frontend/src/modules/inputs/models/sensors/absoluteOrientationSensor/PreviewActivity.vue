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
import {BaseList, ErrorCard} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {
  Quaternion,
  WebSenseAbsoluteOrientationSensor
} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/Sensor"
import OrientationAnimation from "@/shared/components/OrientationAnimation.vue"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"
import {onUnmounted} from "vue"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensorType
}>()

const absoluteOrientationSensor = props.sensor as WebSenseAbsoluteOrientationSensor
absoluteOrientationSensor.start({frequency: 60, referenceFrame: 'device'})
const { currentSensorValue, error } = absoluteOrientationSensor

onUnmounted(() => {
  absoluteOrientationSensor.stop()
})
</script>

<style scoped></style>
