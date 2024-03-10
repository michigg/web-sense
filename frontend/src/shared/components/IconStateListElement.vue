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
    <span class="icon">
      <slot />
      <BaseIcon :icon-key="iconKey" />
    </span>
    <slot name="postfix" />
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
  gap: var(--space-sm);
  background-color: var(--color-surface-1);
}

.icon {
  margin-inline-start: auto;
}

.success {
  @apply text-success;
}

.fail {
  @apply text-danger;
}
</style>
