<template>
  <LayoutBase
    v-if="!logElement"
    title="Messung"
  >
    <LoadingCard title="Messung wird geladen">
      Die Messung wird aus dem lokalen Speicher geladen.
    </LoadingCard>
  </LayoutBase>
  <LayoutBase
    v-else
    :title="`Messung ${logElement.title}`"
  >
    <small>MId: {{ logElement.pKey }}. TId: {{ logElement.id }}</small>
    <LogTransmissionAction :transmitted="logElement.transmitted" />
    <DynamicResult
      v-if="logElement"
      :log-task="logElement"
    />
    <WarnCard
      title="Messung löschen"
      class="delete-box"
    >
      <p>
        Mit dem Klick auf <strong>Messung löschen</strong> wird diese Messung
        lokal von Ihrem Gerät gelöscht. Falls Sie diese Messung bereits
        gespendet haben, bleibt diese Messung veröffentlicht.
      </p>
      <ButtonBase
        class="delete-button"
        @click="deleteLogAndRouteToMeasurements"
      >
        Messung löschen
      </ButtonBase>
    </WarnCard>
  </LayoutBase>
</template>

<script lang="ts" setup>
import LayoutBase from "@/shared/components/LayoutBase.vue"
import { useLogElement } from "@/modules/log/composables/useLogElement"
import LogTransmissionAction from "@/modules/log/components/LogTransmissionAction.vue"
import ButtonBase from "@/shared/components/ButtonBase.vue"
import { useLogRoutes } from "@/modules/log/composables/useLogRoutes"
import DynamicResult from "@/modules/log/components/DynamicResult.vue"
import WarnCard from "@/shared/components/cards/WarnCard.vue"
import LoadingCard from "@/shared/components/cards/LoadingCard.vue"

const {
  logElement,
  deleteLogElement
} = useLogElement()

const { routeToMeasurements } = useLogRoutes()
const deleteLogAndRouteToMeasurements = async () => {
  await deleteLogElement()
  await routeToMeasurements()
}
</script>
<style scoped>
small {
  align-self: flex-end;
  padding: 0.25rem 1rem;
  width: auto;
}

.delete-box {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.delete-button {
  color: var(--color-text-button);
  background-color: hsl(var(--hue-danger), 100%, 30%);
}

.delete-button:hover {
  box-shadow: inset 0.25rem 0.25rem 0.5rem hsl(var(--hue-danger), 100%, 20%);
}
</style>
