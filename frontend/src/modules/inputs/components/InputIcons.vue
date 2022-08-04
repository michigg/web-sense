<template>
  <List class="flex gap-2">
    <li
      v-for="[key, input] in inputs"
      :key="key"
      :class="[
        input.isAvailable ? 'text-success' : 'text-danger',
        'inputs-icon',
      ]"
    >
      <IconBadge
        :icon-key="
          input.isAvailable ? input.availableIconKey : input.unavailableIconKey
        "
      />
    </li>
  </List>
</template>

<script lang="ts" setup>
import IconBadge from "@/shared/components/BaseIconBadge.vue"
import List from "@/shared/components/BaseList.vue"
import { computed } from "vue"
import type { InputType } from "@/modules/inputs/models/inputType"
import { useSensorStore } from "@/modules/inputs/store"

const props = defineProps<{
  inputTypes: Array<InputType>;
}>()
const sensorStore = useSensorStore()
const inputs = computed(() => sensorStore.getSensorsFromKeys(props.inputTypes))
</script>
