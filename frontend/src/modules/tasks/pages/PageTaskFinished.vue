<template>
  <LayoutBase
    v-if="!task"
    title="Mission fehlgeschlagen"
  >
    <InfoCard
      title="Oops"
      class="warn-box"
    >
      <p>
        Wir konnten deine Mission nicht mehr finden. Dies ist normalerweise der
        Fall, wenn du die Seite neu lädst, ohne die Mission vorher zu speichern.
        Leider können wir so den Missonsstand nicht mehr wiederherstellen. Bitte
        starte die Mission erneut.
      </p>
      <BaseButton @click="routeToTasks">
        Mission neu starten
      </BaseButton>
    </InfoCard>
  </LayoutBase>
  <LayoutBase
    v-else
    :title="`${task.title}`"
  >
    <InfoCard title="Mission erfolgreich beendet">
      <p>
        Herzlichen glückwunsch! Du hast die Misson
        <strong>{{ task.title }}</strong> erfolgreich beendet.
      </p>
      <p>
        Nachfolgend siehst du deine Ergebnisse. Diese kannst du entweder nur
        lokal speichern oder der Allgemeinheit spenden. Deine Daten werden nur
        übermittelt, wenn du auf <strong>Daten spenden</strong> clickst.
      </p>
    </InfoCard>
    <DynamicResult
      v-if="preview"
      :log-task="preview"
    />
    <ButtonGroup>
      <BaseButton @click="save">
        Lokal sichern
      </BaseButton>
      <BaseButton
        v-if="isBackendConfigured"
        @click="contribute"
      >
        Daten spenden
      </BaseButton>
    </ButtonGroup>
  </LayoutBase>
</template>

<script lang="ts" setup>
import LayoutBase from "@/shared/components/LayoutBase.vue"
import { useTaskFinished } from "@/modules/tasks/composables/useTaskFinished"
import { useLogRoutes } from "@/modules/log/composables/useLogRoutes"
import DynamicResult from "@/modules/log/components/DynamicResult.vue"
import { useTaskRoutes } from "@/modules/tasks/composables/useTaskRoutes"
import { InfoCard, BaseButton, ButtonGroup } from "@michigg/component-library"
import { useAppConfig } from "@/modules/settings/composables/useAppConfig"

const {
  task,
  preview,
  contributeTask,
  saveTask
} = useTaskFinished()

const { routeToTasks } = useTaskRoutes()
const { routeToMeasurementDetail } = useLogRoutes()
const contribute = async () => {
  const logKey = await contributeTask()
  await routeToMeasurementDetail(logKey)
}
const save = async () => {
  const logKey = await saveTask()
  await routeToMeasurementDetail(logKey)
}

const { isBackendConfigured } = useAppConfig()
</script>

<style scoped>
.warn-box button {
  background-color: var(--color-danger);
}
</style>
