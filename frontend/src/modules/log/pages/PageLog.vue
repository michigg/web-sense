<template>
  <LayoutBase title="Messungen">
    <ImportButton class="import-button" @upload="onUpload" />
    <ErrorCard :error="uploadError" />
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
import { InfoCard, ErrorCard } from "@michigg/component-library"
import { useLogStore } from "@/modules/log/store/log"
import {computed, onMounted, ref} from "vue"
import ImportButton from "@/shared/components/ImportButton.vue"
import {LogTask} from "@/modules/log/models/logTask"

const logStore = useLogStore()
const logs = computed(() => logStore.logs)

onMounted(async () => {
  await logStore.init()
})

const uploadError = ref<Error | undefined>()
const onUpload = (uploadData: object) => {
  try {
    logStore.addSharedLog(uploadData as LogTask)
  } catch (e: unknown) {
    if (e instanceof Error) {
      uploadError.value = e
      return
    }
    uploadError.value = new Error("Der Upload ist leider fehlgeschlagen. Bitte versuche es erneut.")
  }
}
</script>
<style scoped>
.import-button {
  align-self: end;
  padding-block-start: var(--space-xs);
}
</style>
