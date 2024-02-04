<template>
  <div class="import-button">
    <input
      id="import-input"
      type="file"
      @change="onInput"
    >
    <label for="import-input">
      <BaseIcon icon-key="bi-upload"/>
      Messung laden
    </label>
  </div>
</template>
<script lang="ts" setup>
import {BaseIcon} from "@michigg/component-library"
import {ref} from "vue"
import {useJson} from "@/shared/composables/useJson"

const emit = defineEmits<{
  (e: 'upload', json: object): void
}>()

const error = ref<Error | undefined>()
const onInput = (payload: Event) => {
  const target = payload.target as unknown as { files: File[] }
  const fileList = target.files;
  const file = fileList[0]
  if (!file) {
    error.value = new Error("Es konnte keine Datei gefunden werden")
  }
  if (file.type && file.type !== 'text/plain') {
    error.value = new Error(`Dateiformat ${file.type} wird nicht unterstützt.`)
  }
  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    const text = event.target?.result;
    if (!text) {
      error.value = new Error(`Die Datei scheint keinen Inhalt zu haben. Bitte überprüfe die Datei.`)
      return
    }
    const { parseJSON } = useJson()
    const json = parseJSON(text as string)
    emit('upload', json)
  });
  reader.readAsText(file);

}
</script>

<style scoped>
.import-button {
  position: relative;
  width: auto;
}

.import-button input {
  position: absolute;
  opacity: 0;
  width: 0;
}

label {
  padding: var(--space-xs) var(--space-xs);
  border: 1px solid;
  border-color: var(--color-primary);
  border-radius: var(--radius-md);
}

label:hover, label:focus-within, label:active {
  background-color: var(--color-primary);
}
</style>
