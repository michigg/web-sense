<template>
  <BaseCard class="transmission-actions">
    <div
      v-if="!transmitted"
      class="transmit-action"
    >
      <p>
        Wenn Sie diese Daten der Allgemeinheit zur Verfügung stellen wollen,
        dann können Sie dies mit einem Klick auf
        <strong>Daten spenden</strong> tun. Ihre Daten bleiben dabei weiterhin
        lokal gespeichert.
      </p>
      <BaseButton @click="contributeLog">
        Daten spenden
      </BaseButton>
    </div>

    <p v-else>
      Daten wurden gespendet
    </p>
  </BaseCard>
</template>
<script lang="ts" setup>
import { useLog } from "@/modules/log/composables/useLog"
import { BaseCard, BaseButton } from "@michigg/component-library"

const { contributeLog } = useLog()

defineProps<{
  transmitted: boolean;
}>()
</script>
<style scoped>
.transmission-actions {
  display: flex;
  padding: 1rem 2rem;
}

.transmit-action {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
</style>
