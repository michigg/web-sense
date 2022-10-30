<template>
  <LayoutBase
    v-if="!log || log.length === 0"
    title="Missionsdaten"
  >
    <LoadingCard title="Messungen werden geladen">
      Die Messungen werden geladen und aggregiert.
    </LoadingCard>
  </LayoutBase>
  <LayoutBase
    v-else
    :title="`Zusammenfassung Mission ${title}`"
  >
    <DynamicAggregatedResult :log="log" />
  </LayoutBase>
</template>

<script lang="ts" setup>
import { LoadingCard } from "@michigg/component-library"
import LayoutBase from "@/shared/components/LayoutBase.vue"
import DynamicAggregatedResult from "@/modules/log/components/DynamicAggregatedResult.vue"
import { useLogStore } from "@/modules/log/store/log"
import { computed, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const taskId = Number.parseInt(route.params.taskId as string)

const logStore = useLogStore()
onMounted(async () => {
  await logStore.loadLog(taskId)
})

const log = computed(() => logStore.logs)
const title = computed(() => {
  if (!log.value || log.value.length === 0) {
    return
  }
  return log.value[0].title
})

onUnmounted(() => {
  logStore.$reset()
})
</script>

<style scoped>

</style>
