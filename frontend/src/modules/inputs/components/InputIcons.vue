<template>
  <BaseInlineList class="flex gap-2">
    <!-- TODO: patch component library to use better color concept-->
    <li
      v-for="[key, input] in inputs"
      :key="key"
      class="inputs-icon"
      :style="`--color-badge: var(${input.isAvailable ? '--color-success' : '--color-danger'})`"
    >
      <BaseIconBadge
        class="input-icon-badge"
        :icon-key="
          input.isAvailable ? input.availableIconKey : input.unavailableIconKey
        "
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
<style>
.input-icon-badge {
  --color-surface-badge: var(--color-surface-1);
}
</style>
