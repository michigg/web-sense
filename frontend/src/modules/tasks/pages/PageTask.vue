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
      <LogInputTypeList :task="task"/>
    </BaseCard>
    <BaseCard title="">
      <p v-if="!taskExecutionPossible">Leider besitzt dein Gerät nicht alle der geforderten Sensoren. Probiers mit einer anderen Aktivität</p>
      <ButtonGroup>
        <ButtonBase @click="routeToTasks">Aktivitäten</ButtonBase>
        <ButtonBase v-if="taskExecutionPossible" @click="startTask">Mission starten</ButtonBase>
      </ButtonGroup>
    </BaseCard>
  </LayoutBase>
</template>

<script setup>
import BaseCard from '@/shared/components/cards/BaseCard'
import LayoutBase from '@/shared/components/LayoutBase'
import ButtonGroup from '@/shared/components/ButtonGroup'
import ButtonBase from '@/shared/components/ButtonBase'
import { useTask } from '@/modules/tasks/composables/useTask'
import { useTaskRoutes } from '@/modules/tasks/composables/useTaskRoutes'
import LogInputTypeList from '@/modules/log/components/LogInputTypeList'
import LoadingCard from '@/shared/components/cards/LoadingCard'

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
  routeToTaskExecute(task.value.id)
}
</script>

<style scoped>

</style>
