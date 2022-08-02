<template>
  <li>
    <BaseCard
      :title="instruction.title"
      class="task-step-instruction-list-item"
    >
      <img
        v-if="instruction.image"
        :src="instruction.image.src"
        :alt="instruction.image.alt"
      >
      <p>{{ instruction.description }}</p>
    </BaseCard>
  </li>
</template>

<script lang="ts" setup>
import type { ITaskStepInstruction } from "@/modules/tasks/models/taskStepInstruction"
import BaseCard from "@/shared/components/cards/BaseCard.vue"

defineProps<{
  instruction: ITaskStepInstruction;
}>()
</script>

<style scoped>
.task-step-instruction-list-item {
  display: flex;
  flex-flow: column;
  background-color: var(--color-surface-3);
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  margin: 0;
}
</style>
