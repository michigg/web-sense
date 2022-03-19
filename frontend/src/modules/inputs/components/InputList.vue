<template>
  <List>
    <IconStateListElement
      v-for="[key,input] in inputs"
      :key="key"
      :icon-key="input.isAvailable ? input.availableIconKey : input.unavailableIconKey"
      :label="input.key.toUpperCase()"
      :fail="!input.isAvailable"
      :success="input.isAvailable"
      data-test="sensor-list-element"
    />
  </List>
</template>

<script lang="ts" setup>
import IconStateListElement from '@/shared/components/IconStateListElement.vue'
import List from '@/shared/components/BaseList.vue'
import { useStore } from '@/store'
import { computed } from 'vue'
import { InputType } from '@/modules/inputs/models/inputType'

const props = defineProps<{
  inputTypes: Array<InputType>
}>()
const store = useStore()
const inputs = computed(() => store.getters['sensors/getSensorsFromKeys'](props.inputTypes))
</script>
