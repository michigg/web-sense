<template>
  <LayoutBase title="Aktivitäten">
    <LoadingCard
      v-if="busy"
      title="Aktivitäten werden geladen"
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
import BaseList from "@/shared/components/BaseList.vue"
import LayoutBase from "@/shared/components/LayoutBase.vue"
import { useTask } from "@/modules/tasks/composables/useTask"
import ErrorCard from "@/shared/components/cards/ErrorCard.vue"
import LoadingCard from "@/shared/components/cards/LoadingCard.vue"

const {
  tasks,
  busy,
  error
} = useTask()
</script>

<style scoped></style>
