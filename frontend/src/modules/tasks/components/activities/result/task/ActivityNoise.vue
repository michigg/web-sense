<template>
  <BaseList class="measurement-preview">
    <li>
      <h2 class="text-2xl">
        {{ task.steps[0].title }}
      </h2>
      <MiniMap
        :lat="(task.steps[0].results[0].measurements.get('latitude') as number)"
        :lng="(task.steps[0].results[0].measurements.get('longitude') as number)"
      />
      <ChartNoise
        v-if="task.steps[0].results[0].measurements.get('dba')"
        :dba="(task.steps[0].results[0].measurements.get('dba') as number)"
      />
      <DropdownMetaData :log-task-step="task.steps[0]" />
    </li>
    <li>
      <h2 class="text-2xl">
        {{ task.steps[0].title }}
      </h2>
      <DropdownMetaData :log-task-step="task.steps[1]" />
    </li>
  </BaseList>
</template>

<script lang="ts" setup>
import type { LogTask } from "@/modules/log/models/logTask"
import BaseList from "@/shared/components/BaseList.vue"
import ChartNoise from "@/shared/components/charts/ChartNoise.vue"
import MiniMap from "@/shared/components/maps/MiniMap.vue"
import DropdownMetaData from "@/modules/log/components/DropdownMetaData.vue"

// Access to task step properties and sensors
defineProps<{
  task: LogTask;
}>()
</script>

<style scoped></style>
