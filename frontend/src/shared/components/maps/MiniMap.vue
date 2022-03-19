<template>
  <LMap
    v-if="lat && lng"
    ref="map"
    v-model:zoom="zoom"
    :center="[lat, lng]"
    style="height: 30vh; min-height: 15rem; max-height: 25rem;"
    :options="{dragging: false, zoomControl: true, scrollWheelZoom:false}"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></LTileLayer>
    <slot>
      <LMarker :lat-lng="[lat, lng]"></LMarker>
    </slot>
  </LMap>
</template>

<script lang="ts" setup>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

import { ref } from 'vue'

const props = withDefaults(
  defineProps<{ lat: number, lng: number, initialZoom?: number }>(),
  { initialZoom: 17 }
)
const zoom = ref(props.initialZoom)
</script>

<style scoped>

</style>
