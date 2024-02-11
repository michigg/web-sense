<template>
  <LayoutBase
    v-if="!sensor || !previewActivity"
    title="Sensor"
  >
    <LoadingCard
      v-if="!sensor || !previewActivity"
      title="Sensorvorschau wird geladen"
    >
    </LoadingCard>
  </LayoutBase>
  <LayoutBase
    v-else
    :title="`${sensor?.key}`"
  >
    <component
      :is="previewActivity"
      :sensor="sensor"
    />
  </LayoutBase>
</template>

<script lang="ts" setup>
import LayoutBase from "@/shared/components/LayoutBase.vue"
import {useSensorPreview} from "@/modules/inputs/composables/useSensorPreview"
import {LoadingCard} from "@michigg/component-library"

const {
  previewActivity,
  sensor
} = useSensorPreview()
</script>

<style scoped>
</style>
