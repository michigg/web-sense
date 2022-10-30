<template>
  <MiniMap
    v-if="geolocation"
    :lat="geolocation.latitude"
    :lng="geolocation.longitude"
  />
  <BaseList class="measurement-preview">
    <LogListTaskStepItem :log-task-step="taskStep" />
  </BaseList>
</template>

<script lang="ts" setup>
import LogListTaskStepItem from "@/modules/log/components/LogListTaskStepItem.vue"
import type { LogTaskStep } from "@/modules/log/models/logTaskStep"
import { BaseList } from "@michigg/component-library"
import MiniMap from "@/shared/components/maps/MiniMap.vue"
import { computed } from "vue"

// Access to task step properties and sensors
const props = defineProps<{
  taskStep: LogTaskStep;
}>()

const geolocation = computed(() => {
  const latitude = props.taskStep.results[0].metas.get("latitude") as number
  const longitude = props.taskStep.results[0].metas.get("longitude") as number

  if (!latitude || !longitude) {
    return
  }
  return {latitude, longitude}
})
</script>

<style scoped></style>
