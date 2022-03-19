<template>
  <span
    :class="[sensor.isAvailable ? 'text-success' : 'text-danger', 'inputs-icon']"
  >
    <IconBadge
      :icon-key="sensor.isAvailable ? sensor.availableIconKey : sensor.unavailableIconKey"
    />
  </span>
</template>

<script lang="ts" setup>
import IconBadge from '@/shared/components/BaseIconBadge.vue'
import { useStore } from '@/store'
import { computed } from 'vue'
import { InputType } from '@/modules/inputs/models/inputType'

const props = defineProps<{
  inputType: InputType
}>()
const store = useStore()
const sensor = computed(() => store.getters['sensors/getSensor'](props.inputType))

</script>
