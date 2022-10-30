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
import LogList from "@/modules/log/components/LogList.vue"
import { InfoCard } from "@michigg/component-library"
import { useLogStore } from "@/modules/log/store/log"
import { computed, onMounted } from "vue"

const logStore = useLogStore()
const logs = computed(() => logStore.logs)

onMounted(async () => {
  await logStore.init()
})

</script>
