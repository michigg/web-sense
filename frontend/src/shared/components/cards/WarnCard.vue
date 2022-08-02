<template>
  <BaseCard
    :title="title"
    class="warn-box"
  >
    <slot />
  </BaseCard>
</template>
<script lang="ts" setup>
import BaseCard from "@/shared/components/cards/BaseCard.vue"

defineProps<{ title: string }>()
</script>
<style scoped>
.warn-box {
  background-color: var(--color-danger);
}
</style>
