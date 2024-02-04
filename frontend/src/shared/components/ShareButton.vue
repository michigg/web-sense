<template>
  <button @click="onClick">
    <BaseIcon icon-key="bi-share" />
  </button>
</template>

<script lang="ts" setup>
import {useShare, type UseShareOptions} from '@vueuse/core'
import { BaseIcon } from "@michigg/component-library"
import {useJson} from "@/shared/composables/useJson"

const props = defineProps<{
  title?: string,
  files?: File[],
  text?: string,
  url?: string,
  fileName?: string,
  json?: object
}>()
const { share, isSupported } = useShare()
const onClick = () => {
  if (isSupported.value) {
    share(getShareOptions())
  } else {
    const file = jsonToFile()
    // TODO: error handling
    if (!file) return
    downloadViaAnchorTag(file)
  }
}

const getShareOptions = (): UseShareOptions => {
  const options: UseShareOptions = {
    title: props.title,
    text: props.text,
    url: props.url
  }
  options.files = props.files
  const file = jsonToFile()
  options.files = file ? [file] : undefined
  return options
}

const jsonToFile = () => {
  if (!props.json) {
    return
  }
  console.log(props.json)
  const { stringifyJSON } = useJson()
  return new File([stringifyJSON(props.json)], "measurement.txt", {type: "text/plain"})
}



function downloadViaAnchorTag(file: File){
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.setAttribute("download", props.fileName || 'download.txt');
  document.body.appendChild(a);
  a.click();
  a.remove()
}
</script>

<style scoped>
button {
  display: inline;
}
</style>
