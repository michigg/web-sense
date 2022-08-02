<template>
  <li class="key-value-list-item">
    <span>{{ keyData }}:</span> <span class="value">{{ valueData }}</span>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  keyData: string;
  valueData: number | string | boolean;
}>()
</script>

<style scoped>
.key-value-list-item {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.key-value-list-item .value {
  text-align: end;
}
</style>
