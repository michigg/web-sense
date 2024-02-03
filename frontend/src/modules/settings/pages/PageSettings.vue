<template>
  <LayoutBase title="Einstellungen">
    <InfoCard title="Information">
      <p>
        Alle Einstellungen werden lokal gespeichert und sind standardmäßig
        privat. Um uns bei der Verbesserung der Datenqualität zu helfen, können
        Sie mit einem Klick auf <strong>freigeben</strong> die Daten freigeben.
        Diese werden daraufhin bei jeder Messung mitgesendet.
      </p>
    </InfoCard>
    <SettingItem
      settings-key="smartphone-model"
      info="Durch das Smartphone Model können wir die Datenqualität der Messungen verbessen."
      label="Smartphone Model"
      :default="''"
      :display-contribute="true"
      type="text"
    />
    <SettingItem
      settings-key="measurements-retention"
      info="Maximale Anzahl an Messungen, die lokal gespeichert werden dürfen."
      label="Messungsanzahl"
      :default="50"
      :display-contribute="false"
      type="number"
      min="1"
      step="1"
    />
    <p>App Version: {{ appVersion }}  <InstallButton /></p>
    <RouterLink :to="{name: 'Imprint'}">
      Impressum
    </RouterLink>
  </LayoutBase>
</template>

<script lang="ts" setup>
import LayoutBase from "@/shared/components/LayoutBase.vue"
import SettingItem from "@/modules/settings/components/SettingItem.vue"
import { InfoCard } from "@michigg/component-library"
import InstallButton from "@/shared/components/InstallButton.vue";

const appVersion = import.meta.env.PACKAGE_VERSION
</script>
