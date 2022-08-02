<template>
  <i
    :class="['bi', iconKey]"
    :aria-hidden="true"
    data-test="icon"
  />
</template>

<script lang="ts" setup>
defineProps<{
  iconKey: string;
}>()
</script>
