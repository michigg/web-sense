<template>
  <BaseListElement
    :class="[
      'icon-state-list-element',
      success ? 'success' : '',
      fail ? 'fail' : '',
    ]"
    data-test="list-element"
  >
    <span class="tw-font-bold">{{ label }}</span>
    <span>
      <slot />
      <BaseIcon :icon-key="iconKey" />
    </span>
  </BaseListElement>
</template>

<script lang="ts" setup>
import { BaseIcon } from "@michigg/component-library"
import { BaseListElement } from "@michigg/component-library"

withDefaults(
  defineProps<{
    iconKey: string;
    label: string;
    success?: boolean;
    fail?: boolean;
  }>(),
  {
    success: false,
    fail: false
  }
)
</script>

<style scoped>
.icon-state-list-element {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background-color: var(--color-surface-1);
}

.success {
  @apply text-success;
}

.fail {
  @apply text-danger;
}
</style>
