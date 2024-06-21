<template>
  <LMap
    v-if="lat && lng"
    ref="map"
    v-model:zoom="zoom"
    :center="[lat, lng]"
    style="height: 30vh; min-height: 15rem; max-height: 25rem"
    :options="{ dragging: false, zoomControl: true, scrollWheelZoom: false }"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
    <slot>
      <LMarker :lat-lng="[lat, lng]" />
      <LCircle
        :lat-lng="[lat, lng]"
        :radius="accuracy"
      />
    </slot>
  </LMap>
</template>

<script lang="ts" setup>
import "leaflet/dist/leaflet.css"
import {LMap, LTileLayer, LMarker, LCircle} from "@vue-leaflet/vue-leaflet"

import { ref } from "vue"

const props = withDefaults(
  defineProps<{
    lat: number,
    lng: number ,
    accuracy?: number
    initialZoom?: number
  }>(),
  { initialZoom: 17, accuracy: undefined }
)
const zoom = ref(props.initialZoom)
</script>

<style scoped></style>
