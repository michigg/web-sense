<template>
  <div v-if="activity">
    <component
      :is="activity"
      :log="log"
    />
  </div>
</template>

<script lang="ts" setup>
import type { LogTask } from "@/modules/log/models/logTask"
import { useLogAggregatedResultComponents } from "@/modules/log/composables/useLogAggregatedResultComponents"

const props = defineProps<{ log: LogTask[] }>()

const { activity } = useLogAggregatedResultComponents(props.log[0])
</script>

<style scoped>
</style>
