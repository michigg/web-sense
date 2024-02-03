<template>
  <BaseButton
    v-if="isInstallable"
    style="--color-surface-button: var(--color-primary)"
    @click="onCLick"
  >
    <BaseIcon icon-key="bi-download" />
    WebSense installieren
  </BaseButton>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { BaseIcon, BaseButton } from '@michigg/component-library'

const deferredInstallPrompt = ref<Event | undefined>()
const isInstallable = computed(() => !!deferredInstallPrompt.value)
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile.
  event.preventDefault();
  console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  deferredInstallPrompt.value = event;
});

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  deferredInstallPrompt.value = undefined;
});


const onCLick = async () => {
  if (!deferredInstallPrompt.value) {
    console.error("Install button clicked without saved prompt")
    return;
  }
  // Show the install prompt.
  deferredInstallPrompt.value.prompt();
  // Log the result
  const result = await deferredInstallPrompt.value.userChoice;
  console.log('👍', 'userChoice', result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  deferredInstallPrompt.value = undefined;

}
</script>

<style scoped>
button {
  display: inline;
}
</style>
