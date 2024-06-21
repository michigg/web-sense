<template>
  <LayoutBase title="Missionen">
    <LoadingCard
      v-if="busy"
      title="Missionen werden geladen"
    >
      Wir sind gerade dabei die verfügbaren Aufgaben zu laden. Haben Sie einen
      Moment geduld.
    </LoadingCard>
    <ErrorCard :error="error" />
    <BaseList v-if="!busy">
      <TaskListElement
        v-for="[key, task] in tasks"
        :key="key"
        :task-id="task.id"
        :task-title="task.title"
        :task-approved="task.approved"
        :task-input-types="task.getInputs()"
      />
    </BaseList>
  </LayoutBase>
</template>

<script lang="ts" setup>
import TaskListElement from "@/modules/tasks/components/TaskListElement.vue"
import LayoutBase from "@/shared/components/LayoutBase.vue"
import { useTask } from "@/modules/tasks/composables/useTask"
import { ErrorCard, LoadingCard, BaseList } from "@michigg/component-library"

const {
  tasks,
  busy,
  error
} = useTask()
</script>

<style scoped></style>
