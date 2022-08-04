<template>
  <Badge
    class="leading-4"
    data-test="badge"
  >
    <Icon :icon-key="iconKey" />
  </Badge>
</template>

<script lang="ts" setup>
import Icon from "@/shared/components/BaseIcon.vue"
import Badge from "@/shared/components/BaseBadge.vue"

defineProps<{ iconKey: string }>()
</script>
