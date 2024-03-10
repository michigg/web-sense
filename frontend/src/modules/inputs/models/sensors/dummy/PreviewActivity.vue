<template>
  <ErrorCard :error="error" />
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {ErrorCard} from "@michigg/component-library"

// Access sensor
defineProps<{
  sensor: Sensor
}>()

const error = new Error('Sensor konnte nicht gefunden werden. Dies ist der Dummy Sensor.')

</script>

<style scoped></style>
