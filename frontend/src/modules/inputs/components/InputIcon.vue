<template>
  <div
    :class="[
      input != null && input.isAvailable ? 'text-success' : 'text-danger',
      'input-icon',
    ]"
  >
    <BaseIconBadge :icon-key="iconKey" />
  </div>
</template>

<script lang="ts" setup>
import { BaseIconBadge } from "@michigg/component-library"
import { computed } from "vue"
import type { InputType } from "@/modules/inputs/models/inputType"
import { useSensorStore } from "@/modules/inputs/store"

const props = defineProps<{
  inputType: InputType
}>()
const inputStore = useSensorStore()
const input = computed(() => inputStore.getSensor(props.inputType))

const iconKey = computed(() => {
  if (input.value === undefined) {
    return "question"
  }
  return input.value.isAvailable
    ? input.value.availableIconKey
    : input.value.unavailableIconKey
})
</script>
<style scoped>
.input-icon {
  --color-surface-badge: var(--color-surface-1)
}
.text-success {
  --color-badge: var(--color-success);
}
.text-danger {
  --color-badge: var(--color-danger);
}
</style>
