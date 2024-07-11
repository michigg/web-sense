<template>
  <ErrorCard :error="error" />
  <MiniMap
    v-if="location"
    :lng="location?.coords.longitude"
    :lat="location?.coords.latitude"
    :accuracy="location?.coords.accuracy"
  />
</template>

<script lang="ts" setup>
import MiniMap from "@/shared/components/maps/MiniMap.vue"
import {onUnmounted} from "vue"
import type {GeolocationSensor} from "@/modules/inputs/models/sensors/geolocation/Sensor"
import {ErrorCard} from "@michigg/component-library"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensorType
}>()

const geolocationSensor = props.sensor as GeolocationSensor
const { currentSensorValue: location, error } = geolocationSensor
geolocationSensor.start({ enableHighAccuracy: true, maximumAge: 500 })

onUnmounted(() => {
  geolocationSensor.stop()
})
</script>

<style scoped></style>
