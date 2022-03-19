<template>
  <Badge
    class="leading-4"
    data-test="badge"
  >
    <Icon :icon-key="iconKey"/>
  </Badge>
</template>

<script>
import Icon from '@/shared/components/BaseIcon'
import Badge from '@/shared/components/BaseBadge'

export default {
  name: 'IconBadge',
  components: {
    Badge,
    Icon
  },
  props: {
    iconKey: {
      type: String,
      required: true
    }
  }
}
</script>
