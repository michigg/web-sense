import { computed } from "vue"
import type { ComputedRef } from "vue"
import type { LogTask } from "@/modules/log/models/logTask"
import { useLogElementStore } from "@/modules/log/store/logElement"
import { useLogStore } from "@/modules/log/store/log"

export function useLog (): {
  logs: ComputedRef<Array<LogTask>>;
  contributeLog: () => Promise<void>;
} {
  const logStore = useLogStore()
  const logs = computed(() => logStore.logs)

  const contributeLog = async () => {
    const logElementStore = useLogElementStore()
    await logElementStore.contribute()
  }

  return {
    logs,
    contributeLog
  }
}
