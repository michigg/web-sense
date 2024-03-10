<template>
  <h2>Ambilight Sensor Results</h2>
  <BaseList>
    <KeyValueListItem
      key-data="illuminance"
      :value-data="illuminance"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {BaseList} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {WebSenseAmbientLightSensor} from "@/modules/inputs/models/sensors/ambientLight/Sensor"
import {onMounted, onUnmounted, ref} from "vue"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const ambientLightSensor = props.sensor as WebSenseAmbientLightSensor
const { illuminance, error } = ambientLightSensor.useAmbientLightSensor()
onMounted(async () => {
  await ambientLightSensor.getPermission()
  ambientLightSensor.watchIlluminance()
})

onUnmounted(() => {
  ambientLightSensor.stopWatch()
})
</script>

<style scoped></style>
