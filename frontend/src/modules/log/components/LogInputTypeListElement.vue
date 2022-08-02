<template>
  <li class="input-type-list-element">
    <InputIcon :input-type="inputType" />
    <span>{{ description }}</span>
  </li>
</template>

<script lang="ts" setup>
import InputIcon from "@/modules/inputs/components/InputIcon.vue"
import type { InputType } from "@/modules/inputs/models/inputType"

defineProps<{ inputType: InputType; description: string }>()
</script>

<style scoped>
.input-type-list-element {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
