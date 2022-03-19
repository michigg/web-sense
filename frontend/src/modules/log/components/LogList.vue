<template>
  <ul class="log">
    <li
      v-for="log in logs"
      :key="log.id"
      class="log-element"
      @click="routeToMeasurementDetail(log.pKey)"
    >
      <span>{{ toDateTime(log.checkInTimestamp) }}</span>
      <span>{{ log.title }}</span>
      <span><BaseIcon icon-key="bi-chevron-right" class="icon"/></span>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import BaseIcon from '@/shared/components/BaseIcon.vue'
import { useLogRoutes } from '@/modules/log/composables/useLogRoutes'
import { useDateTime } from '@/shared/composables/useDateTime'
import { LogTask } from '@/modules/log/models/logTask'

defineProps<{ logs: Array<LogTask> }>()

const { toDateTime } = useDateTime()
const { routeToMeasurementDetail } = useLogRoutes()
</script>
<style scoped>
.log {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.log .log-element {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-surface-3);
  padding: 1rem 2rem;
  border-radius: var(--card-radius);
}

.log-element:hover, .log-element:active {
  background-color: var(--color-focus);
}

.log .log-element .icon {
  align-self: flex-end;
}
</style>
