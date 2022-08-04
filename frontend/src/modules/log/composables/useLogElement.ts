import { computed, onMounted } from "vue"
import type { ComputedRef } from "vue"
import { useRoute } from "vue-router"
import type { LogTask } from "@/modules/log/models/logTask"
import { logDB } from "@/modules/log/models/logIDB"
import { useLogElementStore } from "@/modules/log/store/logElement"

export function useLogElement (): {
  logElement: ComputedRef<LogTask | undefined>
  deleteLogElement: () => Promise<void>
} {
  const logElementStore = useLogElementStore()
  const route = useRoute()
  const taskLogPKey = +route.params.taskLogPKey

  onMounted(async () => {
    await logElementStore.init(taskLogPKey)
  })
  const logElement: ComputedRef<LogTask | undefined> = computed(
    () => logElementStore.getLogElement
  )

  const deleteLogElement = async () => {
    if (logElement.value && logElement.value.pKey) {
      await logDB.deleteTaskLog(logElement.value.pKey)
    }
  }

  return {
    logElement,
    deleteLogElement
  }
}
