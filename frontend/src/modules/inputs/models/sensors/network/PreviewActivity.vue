<template>
  <h2>Network Sensor Results</h2>
  <p>
    Source:
    <a
      href="https://vueuse.org/core/useNetwork/"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://vueuse.org/core/useNetwork/
    </a>
  </p>
  <BaseList>
    <KeyValueListItem
      key-data="isSupported"
      :value-data="isSupported"
    />
    <KeyValueListItem
      key-data="isOnline"
      :value-data="isOnline"
    />
    <KeyValueListItem
      key-data="saveData"
      :value-data="saveData"
    />
    <KeyValueListItem
      key-data="onlineAt"
      :value-data="onlineAt"
    />
    <KeyValueListItem
      key-data="onlineAt (human readable)"
      :value-data="onlineAtDate"
    />
    <KeyValueListItem
      key-data="offlineAt"
      :value-data="offlineAt"
    />
    <KeyValueListItem
      key-data="offlineAt (human readable)"
      :value-data="offlineAtDate"
    />
    <KeyValueListItem
      key-data="rtt"
      :value-data="rtt"
    />
    <KeyValueListItem
      key-data="downlink"
      :value-data="downlink"
    />
    <KeyValueListItem
      key-data="downlinkMax"
      :value-data="downlinkMax"
    />
    <KeyValueListItem
      key-data="type"
      :value-data="type"
    />
    <KeyValueListItem
      key-data="effectiveType"
      :value-data="effectiveType"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import {BaseList} from "@michigg/component-library"
import type {NetworkSensor} from "@/modules/inputs/models/sensors/network/Sensor"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import {computed, onUnmounted} from "vue"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensorType
}>()

const networkSensor = props.sensor as NetworkSensor
const {
  isSupported,
  isOnline,
  saveData,
  onlineAt,
  rtt,
  downlink,
  downlinkMax,
  type,
  offlineAt,
  effectiveType
} = networkSensor.getNetwork()
const onlineAtDate = computed(() => {
  if (!onlineAt.value) return ''
  const date = new Date(onlineAt.value)
  return date.toLocaleDateString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'longOffset'
  })
})
const offlineAtDate = computed(() => {
  if (!offlineAt.value) return ''
  const date = new Date(offlineAt.value)
  return date.toLocaleDateString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'longOffset'
  })
})

onUnmounted(async () => {
  await networkSensor.stop()
})
</script>

<style scoped></style>
