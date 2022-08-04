<template>
  <h3 class="step-title">
    {{ step.title }}
  </h3>
  <p class="step-description">
    {{ step.description }}
  </p>
</template>

<script lang="ts" setup>
import type { TaskStep } from "@/modules/tasks/models/taskStep"

defineProps<{ step: TaskStep }>()
</script>

<style scoped>
img {
  aspect-ratio: 16/9;
}
</style>
