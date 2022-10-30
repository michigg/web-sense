<template>
  <LayoutBase
    v-if="!task"
    title="Aufgabe"
  >
    <LoadingCard title="Aufgabe wird geladen">
      Wir sind gerade dabei die Aufgabe zu laden.
    </LoadingCard>
  </LayoutBase>
  <LayoutBase
    v-else
    :title="`${task.title}`"
  >
    <BaseCard title="Beschreibung">
      {{ task.description }}
    </BaseCard>
    <BaseCard title="Sensoren">
      <LogInputTypeList :task="task" />
    </BaseCard>
    <BaseCard title="">
      <p v-if="!taskExecutionPossible">
        Leider besitzt dein Gerät nicht alle der geforderten Sensoren. Probiers
        mit einer anderen Aktivität
      </p>
      <ButtonGroup class="button-group">
        <BaseButton @click="routeToTasks">
          Aktivitäten
        </BaseButton>
        <BaseButton
          v-if="taskExecutionPossible"
          @click="startTask"
        >
          Mission starten
        </BaseButton>
      </ButtonGroup>
    </BaseCard>
    <BaseCard
      v-if="logs && logs.length > 0"
      title="Gespeicherte Missionen"
    >
      <BaseButton
        style="--color-surface-button: var(--color-primary)"
        @click="routeToMeasurementAggregation(task.id)"
      >
        Aggregierte Ansicht
      </BaseButton>
      <LogList :logs="logs" />
    </BaseCard>
  </LayoutBase>
</template>

<script lang="ts" setup>
import { BaseButton, BaseCard, ButtonGroup, LoadingCard } from "@michigg/component-library"
import LayoutBase from "@/shared/components/LayoutBase.vue"
import { useTask } from "@/modules/tasks/composables/useTask"
import { useTaskRoutes } from "@/modules/tasks/composables/useTaskRoutes"
import LogInputTypeList from "@/modules/log/components/LogInputTypeList.vue"
import LogList from "@/modules/log/components/LogList.vue"
import { useLogStore } from "@/modules/log/store/log"
import { computed, onUnmounted, watch } from "vue"
import { useLogRoutes } from "@/modules/log/composables/useLogRoutes"

const {
  task,
  approveTask,
  taskExecutionPossible
} = useTask()
const {
  routeToTasks,
  routeToTaskExecute
} = useTaskRoutes()
const startTask = () => {
  approveTask()
  if (task.value == null) {
    throw new Error("no task to start found.")
  }
  routeToTaskExecute(task.value.id)
}

const logStore = useLogStore()
const logs = computed(() => logStore.logs)
watch(task, async (newTask) => {
  if (!newTask) {
    return
  }
  await logStore.loadLog(newTask.id)
})

onUnmounted(() => {
  logStore.$reset()
})

const { routeToMeasurementAggregation } = useLogRoutes()
</script>

<style scoped>
.button-group {
  --color-surface-button: var(--color-primary);
}
</style>
