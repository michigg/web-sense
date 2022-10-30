import { computed } from "vue"

export function useAppConfig () {
  const isBackendConfigured = computed(() => {
    return import.meta.env.VITE_THINGSBOARD_ENDPOINT || import.meta.env.VITE_INFLUX_ENDPOINT
  })

  return { isBackendConfigured }
}
