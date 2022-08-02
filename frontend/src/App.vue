<template>
  <RouterView />
</template>

<script lang="ts" setup>
import { useSensorStore } from "@/modules/inputs/store"

const sensorStore = useSensorStore()
sensorStore.checkAvailability()
</script>
<style lang="css"></style>
