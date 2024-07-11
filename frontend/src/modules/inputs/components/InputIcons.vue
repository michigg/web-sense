<template>
  <BaseInlineList class="flex gap-2">
    <!-- TODO: patch component library to use better color concept-->
    <li
      v-for="[key, input] in inputs"
      :key="key"
      :class="[
        input != null && input.isAvailable ? 'text-success' : 'text-danger',
        'input-icon',
      ]"
    >
      <!-- TODO: use InputIcon component instead of custom implementation -->
      <BaseIconBadge
        class="input-icon-badge"
        :icon-key="input.iconKey"
      />
    </li>
  </BaseInlineList>
</template>

<script lang="ts" setup>
import { BaseIconBadge, BaseInlineList } from "@michigg/component-library"
import { computed } from "vue"
import type { InputType } from "@/modules/inputs/models/inputType"
import { useSensorStore } from "@/modules/inputs/store"

const props = defineProps<{
  inputTypes: Array<InputType>;
}>()
const sensorStore = useSensorStore()
const inputs = computed(() => sensorStore.getSensorsFromKeys(props.inputTypes))
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
