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
<style lang="scss" scoped>
@import "bootstrap-icons/font/bootstrap-icons.css";

</style>
