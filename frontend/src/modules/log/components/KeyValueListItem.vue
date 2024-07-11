<template>
  <li class="key-value-list-item">
    <span>{{ keyData }}:</span> <span class="value"><slot name="value">{{ valueData }}</slot></span>
  </li>
</template>

<script lang="ts" setup>
import type {Quaternion} from "@/modules/inputs/models/sensors/relativeOrientationSensor/useRelativeOrientationSensor"

defineProps<{
  keyData: string;
  valueData?: number | string | boolean | Quaternion;
}>()
</script>

<style scoped>
.key-value-list-item {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.key-value-list-item .value {
  text-align: end;
}
</style>
