<template>
  <BaseCard :title="title || 'Daten werden geladen'">
    <slot/>
    <div class="loading"><span></span></div>
  </BaseCard>
</template>
<script lang="ts" setup>
import BaseCard from '@/shared/components/cards/BaseCard.vue'

defineProps<{ title?: string }>()
</script>
<style scoped>
.loading {
  --loader-height: 10px;
  --loader-width: 4rem;
  --loader-border-radius: 4rem;
  position: relative;
  background-color: var(--color-surface-3);
  border-radius: var(--loader-border-radius);
  width: 100%;
  height: var(--loader-height);
  overflow: hidden;
}

.loading span {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-primary);
  border-radius: var(--loader-border-radius);
  width: var(--loader-width);
  height: var(--loader-height);
  transform: translateX(100%);
  animation: slide 2s infinite linear;
}

@keyframes slide {
  0% {
    transform: translateX(calc(var(--loader-width) * -1)) scaleX(1);
  }

  100% {
    transform: translateX(100vw) scaleX(1);
  }
}
</style>
