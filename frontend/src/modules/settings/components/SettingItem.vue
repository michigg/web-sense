<template>
  <BaseCard
    :title="label"
    class="setting-item"
  >
    <p>{{ info }}</p>
    <div class="setting-input">
      <!--      <label class="main-label" :for="settingsKey">{{ label }}</label>-->
      <input
        :id="settingsKey"
        v-model="setting"
        v-bind="$attrs"
      >
    </div>
    <div
      v-if="displayContribute"
      class="input-group-contribute"
    >
      <input
        :id="`contribute-${settingsKey}`"
        v-model="contribute"
        type="checkbox"
      >
      <label :for="`contribute-${settingsKey}`">Einstellung {{ contribute ? "freigegeben" : "freigeben" }}</label>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue"
import { settingsDB } from "@/modules/settings/models/settingIDB"
import BaseCard from "@/shared/components/cards/BaseCard.vue"

const props = defineProps<{
  settingsKey: string;
  info: string;
  label: string;
  default: string | number;
  displayContribute: boolean;
}>()

const contribute = ref<boolean>(false)
const setting = ref<string | number>("")

onMounted(async () => {
  const iDBSetting = await settingsDB.getSetting(props.settingsKey)
  if (iDBSetting) {
    setting.value = iDBSetting.value
    contribute.value = iDBSetting.contribute
  } else {
    setting.value = props.default
    contribute.value = false
  }
})
watch(setting, async (newSetting) => {
  await settingsDB.putSetting({
    settingKey: props.settingsKey,
    value: newSetting,
    contribute: contribute.value
  })
})
watch(contribute, async (newContribute) => {
  await settingsDB.putSetting({
    settingKey: props.settingsKey,
    value: setting.value,
    contribute: newContribute
  })
})
</script>

<style scoped>
.setting-item {
  display: flex;
  flex-flow: column;
  background-color: var(--color-surface-3);
  gap: 0.5rem;
  margin: 0;
}

.setting-input {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.setting-input input {
  color: var(--color-text);
  background-color: var(--color-surface-1);
  padding: 0.5rem 0.5rem;
  width: 100%;
}

@media (prefers-color-scheme: light) {
  .setting-input input {
    color: black;
  }
}

.setting-item .main-label {
  width: 14ch;
}

.input-group-contribute {
  position: relative;
}

.input-group-contribute input {
  position: absolute;
  width: 1em;
  height: 1em;
  opacity: 0;
}

.input-group-contribute input[type="checkbox"] + label {
  width: 100%;
  border: solid 2px var(--color-primary);
  color: var(--color-text);
  font-weight: bold;
  padding: 0.25rem 1rem;
  text-align: center;
  display: inline-block;
  margin-inline-end: 0.5em;
}

.input-group-contribute input[type="checkbox"]:checked + label {
  background: var(--color-primary);
  color: var(--color-text-button);
}
</style>
