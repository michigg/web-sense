import { computed, ComputedRef, onMounted } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { LogTask } from '@/modules/log/models/logTask'
import { logDB } from '@/modules/log/models/logIDB'
import { unwrap } from 'idb'

export function useLogElement (): { logElement: ComputedRef<LogTask>, deleteLogElement: () => Promise<void> } {
  const store = useStore()
  const route = useRoute()
  const taskLogPKey = +route.params.taskLogPKey

  onMounted(async () => {
    await store.dispatch('logElement/init', taskLogPKey)
  })
  const logElement: ComputedRef<LogTask> = computed(() => {
    const test = store.getters['logElement/getLogElement']
    console.log('useLogElement', test)
    return test
  })

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
