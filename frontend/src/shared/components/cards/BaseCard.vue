<template>
  <div class="card max-w-lg">
    <h2
      v-if="title"
      class="text-2xl"
      data-test="headline"
    >
      {{ title }}
    </h2>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: ''
  }
)
</script>

<style scoped>
.card {
  display: flex;
  flex-flow: column;
  gap: .5rem;
  background-color: var(--color-surface-2);
  border-radius: var(--card-radius);
  padding: .75rem 1rem;
}
</style>
