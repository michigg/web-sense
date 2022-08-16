<template>
  <div class="dropdown-meta-data">
    <BaseButton
      :active="active"
      @click="active = !active"
    >
      Metadaten
    </BaseButton>
    <LogListTaskStepItem
      v-if="active"
      :log-task-step="logTaskStep"
    />
  </div>
</template>

<script lang="ts" setup>
import LogListTaskStepItem from "@/modules/log/components/LogListTaskStepItem.vue"
import { BaseButton } from "@michigg/component-library"
import type { LogTaskStep } from "@/modules/log/models/logTaskStep"
import { ref } from "vue"

defineProps<{
  logTaskStep: LogTaskStep;
}>()
const active = ref(false)
</script>

<style scoped>
.dropdown-meta-data {
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
}
</style>
