<template>
  <button
    :class="['busy-record', busy ? 'busy': '']"
    v-bind="$attrs"
    :disabled="busy"
  >
    <span v-if="busy" class="circle animation"></span>
    <span v-if="busy" class="circle animation"></span>
    <span v-if="busy" class="circle animation"></span>
    <span v-if="busy" class="circle animation"></span>
    <span v-if="busy" class="circle animation"></span>
    <span class="circle main">
      <span class="info">{{ info }}</span>
    </span>
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    info?: string,
    busy?: boolean
  }>(),
  {
    info: 'Recording...',
    busy: false
  }
)
</script>

<style scoped>
.busy-record {
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  background: transparent;
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  --animation-duration: 8s
}

.busy-record .circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: var(--color-primary);
}

.busy-record .circle.main {
  transform: scale(.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  word-break: break-word;
}

.busy-record .circle.main .info {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-text-button)
}

.busy-record .circle.animation {
  background-color: hsl(var(--hue), 100%, 30%);
  transform-origin: 45%;
  transform: rotateZ(0deg) scaleY(.8) scaleX(.85);
}

.busy-record .circle.animation:nth-child(1) {
  animation: record calc(var(--animation-duration) / 5 * 5) infinite linear;
}

.busy-record .circle.animation:nth-child(2) {
  animation: record calc(var(--animation-duration) / 5 * 3) infinite linear;
}

.busy-record .circle.animation:nth-child(3) {
  animation: record calc(var(--animation-duration) / 5 * 4) infinite linear;
}

.busy-record .circle.animation:nth-child(4) {
  animation: record calc(var(--animation-duration) / 5 * 5) infinite linear;
}

.busy-record .circle.animation:nth-child(5) {
  animation: record calc(var(--animation-duration) / 5 * 6) infinite linear;
}

@keyframes record {
  0% {
    transform-origin: 45%;
    transform: rotateZ(0deg) scaleY(.8) scaleX(.85);
  }
  50% {
    transform-origin: 55%;
    transform: rotateZ(360deg) scaleY(.1) scaleX(.85);
  }
  100% {
    transform-origin: 45%;
    transform: rotateZ(720deg) scaleY(.8) scaleX(.85);
  }
}
</style>
