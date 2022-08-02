<template>
  <BaseListElement
    class="task-list-element"
    :class="{ approved: taskApproved }"
    @click="routeToTaskPage"
  >
    <span>{{ taskTitle }}</span>
    <InputIcons :input-types="taskInputTypes" />
  </BaseListElement>
</template>

<script lang="ts" setup>
import BaseListElement from "@/shared/components/BaseListElement.vue"
import { useTaskRoutes } from "@/modules/tasks/composables/useTaskRoutes"
import InputIcons from "@/modules/inputs/components/InputIcons.vue"
import type { InputType } from "@/modules/inputs/models/inputType"

const props = defineProps<{
  taskId: number;
  taskTitle: string;
  taskApproved: boolean;
  taskInputTypes: Array<InputType>;
}>()
const { routeToTask } = useTaskRoutes()

const routeToTaskPage = () => {
  routeToTask(props.taskId)
}
</script>

<style scoped>
.task-list-element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-surface-3);
  border-radius: var(--card-radius);
}

.approved {
  background-color: var(--color-surface-success);
}

.approved:hover,
.approved:focus {
  background-color: var(--color-surface-success-hover);
}
</style>
