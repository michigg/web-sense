<template>
  <List class="flex gap-2">
    <li
      v-for="[key,input] in inputs"
      :key="key"
      :class="[input.isAvailable ? 'text-success' : 'text-danger', 'inputs-icon']"
    >
      <IconBadge
        :icon-key="input.isAvailable ? input.availableIconKey : input.unavailableIconKey"
      />
    </li>
  </List>
</template>

<script lang="ts" setup>
import IconBadge from '@/shared/components/BaseIconBadge.vue'
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
