<template>
  <BaseList class="input-type-list">
    <LogInputTypeListElement
      v-for="(inputDescription, inputType) in task.inputDescriptions"
      :key="inputType"
      :input-type="inputType"
      :description="inputDescription"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import LogInputTypeListElement from "@/modules/log/components/LogInputTypeListElement.vue"
import type { Task } from "@/modules/tasks/models/task"
import { BaseList } from "@michigg/component-library"

defineProps<{ task: Task }>()
</script>

<style scoped>
.input-type-list {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 1rem;
}
</style>
