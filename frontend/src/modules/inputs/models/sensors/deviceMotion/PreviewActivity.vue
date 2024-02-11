<template>
  <h2>Device Motion Sensor Results</h2>
  <BaseList>
    <KeyValueListItem
      key-data="accelerationIncludingGravity.x (m/s^2)"
      :value-data="accelerationIncludingGravity?.x"
    />
    <KeyValueListItem
      key-data="accelerationIncludingGravity.y (m/s^2)"
      :value-data="accelerationIncludingGravity?.y"
    />
    <KeyValueListItem
      key-data="accelerationIncludingGravity.z (m/s^2)"
      :value-data="accelerationIncludingGravity?.z"
    />
    <KeyValueListItem
      key-data="acceleration.x (m/s^2)"
      :value-data="acceleration?.x"
    />
    <KeyValueListItem
      key-data="acceleration.y (m/s^2)"
      :value-data="acceleration?.y"
    />
    <KeyValueListItem
      key-data="acceleration.z (m/s^2)"
      :value-data="acceleration?.z"
    />
    <KeyValueListItem
      key-data="rotationRate.alpha (degrees per seconds)"
      :value-data="rotationRate?.alpha"
    />
    <KeyValueListItem
      key-data="rotationRate.beta (degrees per seconds)"
      :value-data="rotationRate?.beta"
    />
    <KeyValueListItem
      key-data="rotationRate.gamma (degrees per seconds)"
      :value-data="rotationRate?.gamma"
    />
    <KeyValueListItem
      key-data="interval"
      :value-data="interval"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import type {Sensor} from "@/modules/inputs/models/Sensor"
import {BaseList} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {DeviceMotionSensor} from "@/modules/inputs/models/sensors/deviceMotion/Sensor"

// Access sensor
const props = defineProps<{
  sensor: Sensor
}>()

const deviceMotionSensor = props.sensor as DeviceMotionSensor
const {
  accelerationIncludingGravity,
  acceleration,
  rotationRate,
  interval
} = deviceMotionSensor.getDeviceMotion()
</script>

<style scoped></style>
