<script lang="ts" setup>
import NavigationMainItem from '@/shared/components/navigation/NavigationMainItem.vue'
</script>

<template>
  <nav>
    <NavigationMainItem
      :to="{name: 'Tasks'}"
      icon-key="bi-activity"
      label="Aktivitäten"
    />
    <NavigationMainItem
      :to="{name: 'Measurements'}"
      icon-key="bi-save2"
      label="Messungen"
    />
    <NavigationMainItem
      :to="{name: 'Settings'}"
      icon-key="bi-sliders"
      label="Einstellungen"
    />
  </nav>
</template>
<style scoped>
nav {
  background-color: var(--color-surface-1);
  display: flex;
  justify-content: space-evenly;
  border-start-start-radius: 1rem;
  border-start-end-radius: 1rem;
  background-clip: inherit;
  overflow-x: hidden;
}

@media screen and (min-width: 500px) {
  nav {
    display: flex;
    justify-content: left;
    align-items: center;
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }
}
</style>
