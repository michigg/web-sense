<template>
  <div class="input-group">
    <select
      :id="id"
      v-model="localValue"
      v-bind="$attrs"
    >
      <option
        v-for="option in localOptions"
        :key="option.title || option"
        :value="option.value || option"
      >
        {{ option.title || option }}
      </option>
    </select>
    <label :for="id">{{ label }}</label>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

// eslint-disable-next-line no-undef
const props = defineProps<{
  modelValue?: string | number | object | any,
  id: string,
  options: Array<string> | Array<any>,
  label: string,
}>()

const localOptions = computed(() => {
  if (typeof props.options[0] === 'string') {
    return props.options
  } else {
    return props.options.map(option => ({
      title: option.text,
      value: option
    }))
  }
})
// eslint-disable-next-line
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | undefined): void
}>()
const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<style scoped>
.input-group {
  display: flex;
  flex-flow: column;
  row-gap: .1rem;
}

select {
  padding: .5rem .5rem;
  outline: none;
  width: 100%;
  height: 41px;
  color: var(--color-text);
  background-color: var(--color-surface-1);
  border: none;
  border-radius: .5rem;
  border-bottom: solid 3px var(--color-primary);
}

@media (prefers-color-scheme: light) {
  select {
    color: black;
  }
}

label {
  font-size: .75rem;
  padding-left: .5rem;
}

select:focus-visible,
select:focus {
  border-bottom: solid 3px var(--color-focus);
}

select:invalid {
  border-bottom: solid 3px var(--color-danger);
}
</style>
