<template>
  <div class="dropdown-meta-data">
    <ButtonBase :active="active" @click="active = !active">Metadaten</ButtonBase>
    <LogListTaskStepItem v-if="active" :logTaskStep="logTaskStep"/>
  </div>
</template>

<script lang="ts" setup>
import LogListTaskStepItem from '@/modules/log/components/LogListTaskStepItem.vue'
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { LogTaskStep } from '@/modules/log/models/logTaskStep'
import { ref } from 'vue'

defineProps<{
  logTaskStep: LogTaskStep
}>()
const active = ref(false)
</script>

<style scoped>
.dropdown-meta-data {
  display: flex;
  flex-flow: column;
  gap: .5rem;
}
</style>
