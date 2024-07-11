<template>
  <h2>Battery Sensor Results</h2>
  <p>
    Source:
    <a
      href="https://vueuse.org/core/useBattery/#usebattery"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://vueuse.org/core/useBattery/#usebattery
    </a>
  </p>
  <BaseList>
    <KeyValueListItem
      key-data="level"
      :value-data="level"
    >
      <template #value>
        <span>
          {{ level }}
          <BaseIcon
            v-if="level >= 0.99"
            icon-key="bi-battery-full"
          />
          <BaseIcon
            v-else-if="level > 0.20"
            icon-key="bi-battery-half"
          />
          <BaseIcon
            v-else
            icon-key="bi-battery"
          />
        </span>
      </template>
    </KeyValueListItem>
    <KeyValueListItem
      key-data="charging"
      :value-data="charging"
    >
      <template #value>
        <span v-if="charging">
          yes
          <BaseIcon icon-key="bi-battery-charging" />
        </span>
        <span v-else>
          no
          <BaseIcon icon-key="bi-battery-full" />
        </span>
      </template>
    </KeyValueListItem>
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
import {BaseList, BaseIcon} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {BatterySensor, BatterySensorData} from "@/modules/inputs/models/sensors/battery/Sensor"
import type {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"
import {onUnmounted, toRefs} from "vue"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensor<unknown, unknown, unknown>
}>()

const batterySensor = props.sensor as BatterySensor
const {
  level,
  charging,
  chargingTime,
  dischargingTime,
} = toRefs(batterySensor.currentSensorValue.value as BatterySensorData)

onUnmounted(() => {
  batterySensor.stop()
})
</script>

<style scoped></style>
