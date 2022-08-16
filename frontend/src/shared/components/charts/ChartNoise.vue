<template>
  <div class="noise-chart-wrapper">
    <ButtonGroup>
      <BaseButton
        :active="overlayData.type === 'references'"
        @click="showReferenceNoises"
      >
        <BaseIcon icon-key="bi-soundwave" />
      </BaseButton>
      <BaseButton
        :active="overlayData.type === 'night'"
        @click="showNightNoise"
      >
        <BaseIcon icon-key="bi-moon-stars" />
      </BaseButton>
      <BaseButton
        :active="overlayData.type === 'day'"
        @click="showDayNoise"
      >
        <BaseIcon icon-key="bi-brightness-high" />
      </BaseButton>
    </ButtonGroup>
    <h3 class="text-xl">
      {{ overlayData.headline }}
    </h3>
    <div class="noise-chart">
      <svg
        class="chart"
        :viewBox="`0 0 600 700`"
        aria-labelledby="title desc"
        role="img"
      >
        <g :transform="`translate(0, 50)`">
          <!-- Full Sound Pressure Scale-->
          <rect
            class="main-bar"
            transform="translate(0, 0)"
            :x="chartOffsetX"
            y="0"
            :width="chartWidth"
            :height="height"
            fill="#444"
          />

          <!-- Reference Sound Pressure Source-->
          <g
            class="marker"
            :transform="`translate(${chartOffsetX + markerWidth}, ${
              height - dBAToHeight(currentDBA)
            })`"
          >
            <!--          <rect x=0 y="0" :width="markerWidth" :height="10" fill="#000"></rect>-->
            <svg
              x="0"
              :y="-16"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#fff"
              class="bi bi-arrow-bar-left"
              viewBox="0 0 16 16"
            >
              <path
                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
              />
            </svg>
            <text
              x="32"
              y="0"
              dy="10"
              class="label"
            >
              {{ currentDBA.toLocaleString("de-DE") }} dB(A)
            </text>
          </g>
          <g
            v-for="element in overlayData.data"
            :key="element.label"
            class="bar"
            :transform="`translate(${chartOffsetX}, ${
              height - dBAToHeight(element.dbStop)
            })`"
          >
            <rect
              x="0"
              y="0"
              :fill="element.color"
              :width="chartWidth"
              :height="dBAToHeight(element.dbStop - element.dbStart)"
            />
            <text
              x="10"
              y="15"
              dy="15"
              class="label"
            >{{ element.label }}
            </text>
          </g>
          <!-- Reference Sound Pressure -->
          <g
            v-for="referenceDBA in referenceDBAs"
            :key="referenceDBA"
            class="reference-dbas"
            :transform="`translate(${chartOffsetX}, ${
              height - dBAToHeight(referenceDBA)
            })`"
          >
            <rect
              x="0"
              y="-2.5"
              fill="rgba(0,0,0,.2)"
              :width="chartWidth"
              :height="5"
            />
            <text
              x="-20"
              y="0"
              dy="10"
              class="label"
            >
              {{ referenceDBA }} dB(A)
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { BaseIcon, BaseButton, ButtonGroup } from "@michigg/component-library"

const height = 600
const chartWidth = 250
const chartOffsetX = 600 / 2 - chartWidth / 2
const markerWidth = chartWidth
const dBAToHeight = (dba: number) => (dba * 10) / 2

const props = defineProps<{ dba: number }>()

const currentDBA = ref(0)
let timer = -1

onMounted(() => {
  timer = window.setInterval(() => {
    if (currentDBA.value < props.dba) {
      currentDBA.value++
    } else {
      currentDBA.value = +props.dba.toFixed(0)
      if (timer) {
        clearInterval(timer)
      }
    }
  }, 10)
})

const referenceNoises = {
  headline: "Lärmeinschätzung durch Referenzwerte",
  type: "references",
  data: [
    {
      dbStart: 0,
      dbStop: 20,
      color: "rgb(0,240,0)",
      label: "Blätterrauschen"
    },
    {
      dbStart: 20,
      dbStop: 40,
      color: "rgb(75,243,0)",
      label: "Tickende Uhr"
    },
    {
      dbStart: 40,
      dbStop: 60,
      color: "rgb(160,247,0)",
      label: "Unterhaltung"
    },
    {
      dbStart: 60,
      dbStop: 70,
      color: "rgb(221,250,0)",
      label: "Staubsauger"
    },
    {
      dbStart: 70,
      dbStop: 80,
      color: "rgb(253,233,14)",
      label: "PKW Verkehr"
    },
    {
      dbStart: 80,
      dbStop: 90,
      color: "rgb(253,179,41)",
      label: "Baustellenarbeit"
    },
    {
      dbStart: 90,
      dbStop: 100,
      color: "rgb(253,145,54)",
      label: "Motorsäge"
    },
    {
      dbStart: 100,
      dbStop: 110,
      color: "rgb(253,108,67)",
      label: "Rockkonzert"
    },
    {
      dbStart: 110,
      dbStop: 120,
      color: "rgb(253,81,81)",
      label: "Düsenflugzeuge"
    }
  ]
}
const dayNoise = {
  headline: "Lärmeinschätzung während des Tages (6 - 22 Uhr)",
  type: "day",
  data: [
    {
      dbStart: 0,
      dbStop: 55,
      color: "rgb(0,240,0)",
      label: "Leise"
    },
    {
      dbStart: 55,
      dbStop: 120,
      color: "rgb(253,81,81)",
      label: "Laut"
    }
  ]
}

const nightNoise = {
  headline: "Lärmeinschätzung während der Nacht (22 - 6 Uhr)",
  type: "night",
  data: [
    {
      dbStart: 0,
      dbStop: 40,
      color: "rgb(0,240,0)",
      label: "Leise"
    },
    {
      dbStart: 40,
      dbStop: 120,
      color: "rgb(253,81,81)",
      label: "Laut"
    }
  ]
}

const referenceDBAs = [0, 20, 40, 60, 80, 100, 120]

const overlayData = ref(referenceNoises)
const showReferenceNoises = () => {
  overlayData.value = referenceNoises
}

const showDayNoise = () => {
  overlayData.value = dayNoise
}

const showNightNoise = () => {
  overlayData.value = nightNoise
}
</script>

<style scoped>
.noise-chart {
  display: flex;
  justify-content: center;
}

.noise-chart svg {
  height: 100%;
}

.noise-chart svg .bar .label,
.noise-chart svg .marker .label,
.noise-chart svg .reference-dbas .label {
  font-size: 1.75rem;
  fill: var(--color-text);
}

.noise-chart svg .reference-dbas .label {
  font-size: 1.5rem;
  text-anchor: end;
}

.noise-chart svg .marker .label {
  font-size: 1.75rem;
}

.noise-chart svg .bar .label {
  fill: #333;
  font-weight: 500;
}

.noise-chart-wrapper {
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
}
</style>
