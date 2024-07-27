import {readonly, ref} from "vue"

export function useEntityState() {
  const busy = ref(false)
  const error = ref<Error | undefined>()

  const setIdle = () => {
    busy.value = false
  }
  const setBusy = () => {
    busy.value = true
  }

  const setError = (newError: Error) => {
    error.value = newError
  }
  const clearError = () => {
    error.value = undefined
  }

  return {
    busy: readonly(busy),
    error: readonly(error),
    setIdle,
    setBusy,
    setError,
    clearError
  }
}
