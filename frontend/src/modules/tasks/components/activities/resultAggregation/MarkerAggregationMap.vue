<template>
  <!--  TODO: marker map-->
  <LMap
    ref="map"
    :zoom="zoom"
    :center="[47.41322, -1.219482]"
    style="height: 30vh; width: 100%;"
    @ready="onMapReady"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
    <LMarker
      v-for="logElement in geolocationTasks"
      :key="logElement.checkInTimestamp"
      :lat-lng="logElement.geolocation.toLatLng()"
    />
  </LMap>
</template>

<script lang="ts" setup>
// TODO: maybe it can be removed? (MiniMap also defines this)
import "leaflet/dist/leaflet.css"

import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet"
import { LogTask } from "@/modules/log/models/logTask"
import { computed, ref } from "vue"
import { LatLng, Map } from "leaflet"

const zoom = ref(2)

const props = defineProps<{
  log: LogTask[]
}>()

const geolocationTasks = computed(() => props.log.filter(logTask => logTask.geolocation))
const onMapReady = (map: Map) => {
  const latLngs = geolocationTasks.value.map(logTask => logTask.geolocation?.toLatLng()) as LatLng[]
  if (latLngs.length === 1) {
    map.setView(latLngs[0], 18)
  }
  if (latLngs.length > 1) {
    // TODO: fix type error
    map.fitBounds([...latLngs])
  }
}

</script>

<style scoped>

</style>
