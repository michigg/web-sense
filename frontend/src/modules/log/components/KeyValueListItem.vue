<template>
  <li class="key-value-list-item">
    <TooltipIcon
      :id="keyData"
      class="result-info-tooltip"
    >
      <template #tooltipIcon>
        {{ valueDescription.label }}:
      </template>
      <template #tooltipText>
        <p><strong>Technischer Name:</strong> {{ valueDescription.technicalLabel }}</p>
        <p><strong>Beschreibung:</strong> {{ valueDescription.description }}</p>
        <p
          v-if="valueDescription.sources.length > 0"
          class="sources"
        >
          <strong>Quellen:</strong>
          <ul>
            <li
              v-for="sourceLink in valueDescription.sources"
              :key="sourceLink"
            >
              <a
                :href="sourceLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ sourceLink }}
              </a>
            </li>
          </ul>
        </p>
      </template>
    </TooltipIcon>
    <span class="value"><slot name="value">{{ valueData }}</slot></span>
  </li>
</template>

<script lang="ts" setup>
import type {Quaternion} from "@/modules/inputs/models/sensors/relativeOrientationSensor/Sensor"
import {useResultValueKey} from "@/modules/inputs/models/sensors/useResultValueKey"
import {TooltipIcon} from "@lion5/component-library"
import type {ResultValueKey} from "@/modules/inputs/models/sensors/resultValueKeys"

const props = defineProps<{
  keyData: ResultValueKey;
  valueData?: number | string | boolean | Quaternion;
}>()

const {getResultValueDescription} = useResultValueKey()
const valueDescription = getResultValueDescription(props.keyData)
</script>

<style lang="scss" scoped>
.key-value-list-item {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.key-value-list-item .value {
  text-align: end;
}

.result-info-tooltip {
  --white: var(--color-surface-2);
  --card-shadow: var(--shadow-inset-md);

  p {
    margin-block-end: var(--space-xs);
  }

  :deep(div[role=tooltip]) {
    z-index: 1;
  }
}

.sources {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap
}
</style>
