<template>
  <h3 class="step-title">{{ step.title }}</h3>
  <img v-if="step.imageSrc" :src="step.imageSrc" :alt="step.imageAlt">
  <p class="step-description">{{ step.description }}</p>
</template>

<script lang="ts" setup>
import { TaskStep } from '@/modules/tasks/models/taskStep'

defineProps<{ step: TaskStep }>()
</script>

<style scoped>
img {
  aspect-ratio: 16/9;
}
</style>
