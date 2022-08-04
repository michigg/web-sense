<template>
  <BaseList class="measurement-preview">
    <LogListTaskStepItem :log-task-step="taskStep" />
  </BaseList>
</template>

<script lang="ts" setup>
import BaseList from "@/shared/components/BaseList.vue"
import LogListTaskStepItem from "@/modules/log/components/LogListTaskStepItem.vue"
import type { LogTaskStep } from "@/modules/log/models/logTaskStep"

// Access to task step properties and sensors
defineProps<{
  taskStep: LogTaskStep;
}>()
</script>

<style scoped></style>
