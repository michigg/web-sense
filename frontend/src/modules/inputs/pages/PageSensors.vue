<template>
  <LayoutBase title="Sensoren">
    <BaseCard title="Sensorstatus">
      <InputList :input-types="inputTypes"/>
    </BaseCard>
  </LayoutBase>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import BaseCard from '@/shared/components/cards/BaseCard.vue'
import LayoutBase from '@/shared/components/LayoutBase.vue'
import { useStore } from '@/store'
import InputList from '@/modules/inputs/components/InputList.vue'

const inputTypes = ref([])
const store = useStore()
onMounted(async () => {
  await store.dispatch('sensors/checkAvailability')
  inputTypes.value = store.getters['sensors/getSensorTypes']
})
</script>
