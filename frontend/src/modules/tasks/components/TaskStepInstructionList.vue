<template>
  <div class="info-box">
    <BaseCard :title="title">
      <p>{{ description }}</p>
    </BaseCard>
    <BaseList class="instruction-list">
      <TaskStepInstructionListItem
        v-for="instruction of instructions"
        :key="instruction.title"
        :instruction="instruction"
      />
    </BaseList>
  </div>
</template>

<script lang="ts" setup>
import type { ITaskStepInstruction } from "@/modules/tasks/models/taskStepInstruction"
import TaskStepInstructionListItem from "@/modules/tasks/components/TaskStepInstructionListItem.vue"
import { BaseCard, BaseList } from "@michigg/component-library"

defineProps<{
  title: string;
  description: string;
  instructions: Array<ITaskStepInstruction>;
}>()
</script>

<style scoped>
.info-box {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.instruction-list {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
</style>
