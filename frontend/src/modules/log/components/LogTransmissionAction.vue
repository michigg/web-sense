<template>
  <BaseCard class="transmission-actions">
    <div v-if="!transmitted" class="transmit-action">
      <p>Wenn Sie diese Daten der Allgemeinheit zur
        Verfügung stellen wollen, dann können Sie dies mit einem Klick auf <strong>Daten spenden</strong> tun. Ihre Daten bleiben dabei
        weiterhin lokal gespeichert.</p>
      <ButtonBase @click="contributeLog">Daten spenden</ButtonBase>
    </div>

    <p v-else>Daten wurden gespendet</p>
  </BaseCard>
</template>
<script lang="ts" setup>
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { useLog } from '@/modules/log/composables/useLog'
import BaseCard from '@/shared/components/cards/BaseCard.vue'

const { contributeLog } = useLog()

defineProps<{
  transmitted: boolean
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
