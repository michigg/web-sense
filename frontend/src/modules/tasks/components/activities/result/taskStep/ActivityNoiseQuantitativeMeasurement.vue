<template>
  <MiniMap
    :lat="(taskStep.results[0].measurements.get('latitude') as number)"
    :lng="(taskStep.results[0].measurements.get('longitude') as number)"
  />
  <ChartNoise
    v-if="taskStep.results[0].measurements.get('averageDBA')"
    :dba="(taskStep.results[0].measurements.get('averageDBA') as number)"
  />
  <DropdownMetaData :log-task-step="taskStep" />
</template>

<script lang="ts" setup>
import type { LogTaskStep } from "@/modules/log/models/logTaskStep"
import MiniMap from "@/shared/components/maps/MiniMap.vue"
import ChartNoise from "@/shared/components/charts/ChartNoise.vue"
import DropdownMetaData from "@/modules/log/components/DropdownMetaData.vue"

// Access to task step properties and sensors
defineProps<{
  taskStep: LogTaskStep;
}>()
</script>

<style scoped></style>
