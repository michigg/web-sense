<template>
  <button v-bind="$attrs" :class="[active ? 'active' : '']">
    <slot/>
  </button>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{ active?: boolean }>(),
  { active: false }
)
</script>
<style scoped>
button {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  flex-grow: 1;
  cursor: pointer;
  transition: box-shadow 150ms ease-out;
  color: var(--color-text-button);
  background-color: var(--color-primary);
  font-weight: bold;
}

button:hover, button:active, button.active {
  box-shadow: inset 0.25rem 0.25rem 0.5rem hsl(var(--hue), 100%, 20%);
}
</style>
