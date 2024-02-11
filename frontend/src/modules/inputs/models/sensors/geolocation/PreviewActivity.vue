<template>
  <ErrorCard :error="error" />
  <LoadingCard
    v-if="busy"
    title="Sensorvorschau wird geladen"
  />
  <MiniMap
    v-if="location"
    :lng="location?.coords.longitude"
    :lat="location?.coords.latitude"
    :accuracy="location?.coords.accuracy"
  />
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import MiniMap from "@/shared/components/maps/MiniMap.vue"
import {onMounted, ref} from "vue"
import type {GeolocationSensor} from "@/modules/inputs/models/sensors/geolocation/Sensor"
import {useEntityState} from "@/shared/composables/useEntityState"
import {LoadingCard, ErrorCard} from "@michigg/component-library"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const {busy, setBusy, setIdle, error, setError} = useEntityState()
const location = ref<GeolocationPosition | undefined>()

onMounted(async () => {
  setBusy()
  const geolocationSensor = props.sensor as GeolocationSensor
  const permissionState = await geolocationSensor.getPermission()
  if (permissionState === 'denied') {
    setError(new Error("Zugriff auf den Geolocation Sensor verweigert."))
    return
  }
  location.value = await geolocationSensor.getLocation()
  setIdle()
})
</script>

<style scoped></style>
