<template>
  <LayoutBase title="Sensoren">
    <InfoCard
      title="Experimental Features"
    >
      <p>
        Unter Chrome ist es möglich die Sensor DEVICE_LIGHT und MAGNETOMETER zu aktivieren.
        Hierfür muss die Flag "Generic Sensor Extra Classes" aktiviert werden.
        Gehe dazu in die Flag-Einstellungen chrome://flags/.
      </p>
    </InfoCard>
    <BaseCard title="Sensorstatus">
      <InputList :input-types="inputTypes" />
    </BaseCard>
  </LayoutBase>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import {BaseCard, InfoCard} from "@michigg/component-library"
import LayoutBase from "@/shared/components/LayoutBase.vue"
import InputList from "@/modules/inputs/components/InputList.vue"
import {useSensorStore} from "@/modules/inputs/store"
import type {InputType} from "../models/inputType"

const sensorStore = useSensorStore()
const inputTypes = ref<InputType[]>(sensorStore.getSensorTypes)
</script>
