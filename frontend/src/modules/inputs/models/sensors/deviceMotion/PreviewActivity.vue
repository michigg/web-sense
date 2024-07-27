<template>
  <h2>Device Motion Sensor Results</h2>
  <p>
    Source:
    <a
      href="https://vueuse.org/core/useDeviceMotion/#usedevicemotion"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://vueuse.org/core/useDeviceMotion/#usedevicemotion
    </a>
  </p>
  <BaseList>
    <KeyValueListItem
      key-data="accelGrav.x (m/s^2)"
      :value-data="toFixedDecimals(accelerationIncludingGravity?.x)"
    />
    <KeyValueListItem
      key-data="accelGrav.y (m/s^2)"
      :value-data="toFixedDecimals(accelerationIncludingGravity?.y)"
    />
    <KeyValueListItem
      key-data="accelGrav.z (m/s^2)"
      :value-data="toFixedDecimals(accelerationIncludingGravity?.z)"
    />
    <KeyValueListItem
      key-data="accel.x (m/s^2)"
      :value-data="toFixedDecimals(acceleration?.x)"
    />
    <KeyValueListItem
      key-data="accel.y (m/s^2)"
      :value-data="toFixedDecimals(acceleration?.y)"
    />
    <KeyValueListItem
      key-data="accel.z (m/s^2)"
      :value-data="toFixedDecimals(acceleration?.z)"
    />
    <KeyValueListItem
      key-data="rotRate.alpha (deg/s)"
      :value-data="toFixedDecimals(rotationRate?.alpha)"
    />
    <KeyValueListItem
      key-data="rotRate.beta (deg/s)"
      :value-data="toFixedDecimals(rotationRate?.beta)"
    />
    <KeyValueListItem
      key-data="rotRate.gamma (deg/s)"
      :value-data="toFixedDecimals(rotationRate?.gamma)"
    />
    <KeyValueListItem
      key-data="interval"
      :value-data="interval"
    />
  </BaseList>
</template>

<script lang="ts" setup>
import {BaseList} from "@michigg/component-library"
import KeyValueListItem from "@/modules/log/components/KeyValueListItem.vue"
import type {DeviceMotionSensor} from "@/modules/inputs/models/sensors/deviceMotion/Sensor"
import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"

// Access sensor
const props = defineProps<{
  sensor: AbstractSensorType
}>()

const deviceMotionSensor = props.sensor as DeviceMotionSensor
const {
  accelerationIncludingGravity,
  acceleration,
  rotationRate,
  interval
} = deviceMotionSensor.getDeviceMotion()

const toFixedDecimals = (value?: number | null) => {
  if (!value) return
  return value.toLocaleString('de-DE', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })
}
</script>

<style scoped></style>
