<template>
  <li>
    <h3 class="text-xl font-bold">
      Metadaten
    </h3>
    <BaseList>
      <KeyValueListItem
        v-for="[key, value] of result.metas"
        :key="key"
        :key-data="key"
        :value-data="value"
      />
    </BaseList>

    <h3 class="text-xl font-bold">
      Messergebnisse
    </h3>
    <p v-if="result.measurements.size === 0">
      Keine Daten vorhanden.
    </p>
    <BaseList v-else>
      <KeyValueListItem
        v-for="[key, value] of result.measurements"
        :key="key"
        :key-data="key"
        :value-data="value"
      />
    </BaseList>
  </li>
</template>

<script lang="ts" setup>
import type { LogTaskStepResult } from "@/modules/log/models/logTaskStepResult"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import { BaseList } from "@michigg/component-library"

defineProps<{
  result: LogTaskStepResult;
}>()
</script>

<style scoped>
p {
  display: flex;
  justify-content: space-between;
}

.log-list-task-item .row-1 {
  display: flex;
  justify-content: space-between;
}
</style>
