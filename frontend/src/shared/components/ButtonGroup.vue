<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<style scoped>
.button-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
