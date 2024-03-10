<template>
  <h2>Battery Sensor Results</h2>
  <BaseList>
    <KeyValueListItem
      key-data="isSupported"
      :value-data="isSupported"
    />
    <KeyValueListItem
      key-data="level"
      :value-data="level"
    />
    <KeyValueListItem
      key-data="charging"
      :value-data="charging"
    />
    <KeyValueListItem
      key-data="chargingTime (s)"
      :value-data="chargingTime"
    />
    <KeyValueListItem
      key-data="dischargingTime (s)"
      :value-data="dischargingTime"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {BaseList} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {BatterySensor} from "@/modules/inputs/models/sensors/battery/Sensor"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const batterySensor = props.sensor as BatterySensor
const {
  isSupported,
  level,
  charging,
  chargingTime,
  dischargingTime
} = batterySensor.getBattery()
</script>

<style scoped></style>
