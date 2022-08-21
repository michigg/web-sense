<template>
  <LayoutBase title="Sensoren">
    <BaseCard title="Sensorstatus">
      <InputList :input-types="inputTypes" />
    </BaseCard>
  </LayoutBase>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { BaseCard } from "@michigg/component-library"
import LayoutBase from "@/shared/components/LayoutBase.vue"
import InputList from "@/modules/inputs/components/InputList.vue"
import { useSensorStore } from "@/modules/inputs/store"
import type { InputType } from "../models/inputType"

const inputTypes = ref<InputType[]>([])
const sensorStore = useSensorStore()
onMounted(async () => {
  await sensorStore.checkAvailability()
  inputTypes.value = sensorStore.getSensorTypes
})
</script>
