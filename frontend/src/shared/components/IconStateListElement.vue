<template>
  <ListElement
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
      <Icon :icon-key="iconKey" />
    </span>
  </ListElement>
</template>

<script lang="ts" setup>
import ListElement from "@/shared/components/BaseListElement.vue"
import Icon from "@/shared/components/BaseIcon.vue"

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
