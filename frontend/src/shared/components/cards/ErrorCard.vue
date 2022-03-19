<script lang="ts" setup>
import BaseCard from '@/shared/components/cards/BaseCard.vue'
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { computed, ref } from 'vue'
import { BaseError } from '@/shared/exceptions'

const props = defineProps<{
  error: BaseError | Error | undefined
}>()
const showMoreInfos = ref(false)
const causes = computed(() => {
  if (!props.error || !(props.error instanceof BaseError)) {
    return []
  }
  if (!props.error.cause) {
    return []
  }
  if (props.error.cause instanceof Error) {
    return [props.error.cause]
  } else {
    return props.error.cause
  }
})
</script>
<template>
  <BaseCard v-if="error" :title="error.name" class="danger-box">
    <p>{{ error.message }}</p>
    <ButtonBase
      v-if="error instanceof BaseError"
      :active="showMoreInfos"
      @click="showMoreInfos = !showMoreInfos"
      class="info-button"
    >
      Weitere Informationen
    </ButtonBase>
    <div v-if="showMoreInfos">
      <p
        v-for="childError in causes"
        :key="childError.code"
      >
        {{ childError.name }}: {{ childError.message }}
      </p>
    </div>
  </BaseCard>
</template>

<style scoped>
.danger-box {
  background-color: var(--color-danger);
}

.danger-box .info-button {
  background-color: var(--color-danger);
}
</style>
