<template>
  <div class="layout-base">
    <header class="bg-surface1 w-full h-full">
      <slot name="header">
        <h1
          class="text-3xl text-primary text-center"
          data-test="headline"
        >
          {{ title }}
        </h1>
        <small v-if="subtitle">{{ subtitle }}</small>
      </slot>
    </header>
    <main v-bind="$attrs">
      <slot />
    </main>
    <NavigationMain />
  </div>
</template>
<script lang="ts" setup>
import NavigationMain from "@/shared/components/navigation/NavigationMain.vue"

withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;
  }>(),
  { subtitle: "" }
)
</script>

<style scoped>
.layout-base {
  height: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-areas:
    "header"
    "main"
    "navigation";
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr 45px;
}

@media screen and (min-width: 500px) {
  .layout-base {
    grid-template-areas:
      "navigation"
      "header"
      "main";
    grid-template-rows: 40px auto 1fr;
  }
}

header {
  grid-area: header;
}

main {
  grid-area: main;
  padding-block-end: var(--space-xs);
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
  padding-inline: 1rem;
}

main > :deep(*) {
  width: 100%;
  max-width: 50ch;
}

nav {
  grid-area: navigation;
}
</style>
