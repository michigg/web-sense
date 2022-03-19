<script lang="ts" setup>
import BaseIcon from '@/shared/components/BaseIcon.vue'

defineProps<{
  iconKey: string,
  label: string
}>()

</script>

<template>
  <RouterLink
    v-bind="$attrs"
    class="navigation-icon-item"
  >
    <BaseIcon :icon-key="iconKey"/>
    {{ label }}
  </RouterLink>
</template>
<style scoped>
.navigation-icon-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  line-height: 1;
  font-size: .75rem;
  font-weight: bold;
  padding: 0 1rem;
  height: 100%;
}

.navigation-icon-item i {
  font-size: 1.35rem;
}

@media screen and (min-width: 500px) {
  .navigation-icon-item {
    display: flex;
    flex-flow: row;
    gap: .5rem;
    font-size: 1rem;
  }
}

a:hover, nav a:active {
  background-color: var(--color-surface-1);
}

a.router-link-exact-active {
  color: var(--color-primary);
}
</style>
