<template>
  <BaseList>
    <IconStateListElement
      v-for="[key, input] in inputs"
      :key="key"
      :icon-key="
          input.isAvailable ? input.availableIconKey : input.unavailableIconKey
        "
      :label="input.key.toUpperCase()"
      :fail="!input.isAvailable"
      :success="input.isAvailable"
      data-test="sensor-list-element"
    >
      <template #postfix>
        <RouterLink :to="{ name: 'SensorPreview', params: { inputType: input.key.toUpperCase()}}">
          P
          <i class="bi bi-search" />
        </RouterLink>
      </template>
    </IconStateListElement>
  </BaseList>
</template>

<script lang="ts" setup>
import IconStateListElement from "@/shared/components/IconStateListElement.vue"
import {computed} from "vue"
import type {InputType} from "@/modules/inputs/models/inputType"
import {useSensorStore} from "@/modules/inputs/store"
import {BaseList} from "@michigg/component-library"

const props = defineProps<{
  inputTypes: Array<InputType>
}>()
const sensorStore = useSensorStore()
const inputs = computed(() => sensorStore.getSensorsFromKeys(props.inputTypes))
</script>
<style scoped>
.bi-search {
  display: block;
  color: white;
  width: 10px;
}
</style>
