<template>
  <RouterView/>
</template>

<script setup>
import { useStore } from '@/store'

const store = useStore()
store.dispatch('sensors/checkAvailability')

</script>
<style lang="css">

</style>
