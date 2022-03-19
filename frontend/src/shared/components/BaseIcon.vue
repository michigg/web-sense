<template>
  <i
    :class="['bi', iconKey]"
    :aria-hidden="true"
    data-test="icon"
  ></i>
</template>

<script lang="ts" setup>
defineProps<{
  iconKey: string
}>()
</script>
