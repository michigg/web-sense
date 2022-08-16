<template>
  <LayoutBase title="Messungen">
    <InfoCard
      v-if="logs.length === 0"
      class="card"
      title="Keine Daten gefunden"
    >
      <p>
        Aktuell hast du noch keine gespeicherten Daten, die hier angezeigt
        werden können. Du musst zuerst eine Misson abgeschlossen haben. Missonen
        findest du unter dem Menüpunkt
        <RouterLink :to="{ name: 'Tasks' }">
          Aktivitäten
        </RouterLink>
        .
      </p>
    </InfoCard>
    <LogList
      v-else
      :logs="logs"
    />
  </LayoutBase>
</template>

<script lang="ts" setup>
import LayoutBase from "@/shared/components/LayoutBase.vue"
import { useLog } from "@/modules/log/composables/useLog"
import LogList from "@/modules/log/components/LogList.vue"
import { InfoCard } from "@michigg/component-library"

const { logs } = useLog()
</script>
