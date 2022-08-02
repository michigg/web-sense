<template>
  <span
    :class="[
      sensor != null && sensor.isAvailable ? 'text-success' : 'text-danger',
      'inputs-icon',
    ]"
  >
    <IconBadge :icon-key="iconKey" />
  </span>
</template>

<script lang="ts" setup>
import IconBadge from "@/shared/components/BaseIconBadge.vue"
import { computed } from "vue"
import type { InputType } from "@/modules/inputs/models/inputType"
import { useSensorStore } from "@/modules/inputs/store"

const props = defineProps<{
  inputType: InputType
}>()
const sensorStore = useSensorStore()
const sensor = computed(() => sensorStore.getSensor(props.inputType))

const iconKey = () => {
  if (sensor.value == null) {
    return "question"
  }
  return sensor.value.isAvailable
    ? sensor.value.availableIconKey
    : sensor.value.unavailableIconKey
}
</script>
