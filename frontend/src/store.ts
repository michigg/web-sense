import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { tasksStore } from '@/modules/tasks/store/tasks'
import { InjectionKey } from 'vue'
import { sensorsStore } from '@/modules/inputs/store'
import { taskExecuteStore } from '@/modules/tasks/store/execute'
import { logsStore } from '@/modules/log/store/log'
import { logElementStore } from '@/modules/log/store/logElement'

export interface State {
  test: number
}

export const key: InjectionKey<Store<State>> = Symbol('root store')

export const store = createStore<State>({
  modules: {
    sensors: sensorsStore,
    tasks: tasksStore,
    taskExecute: taskExecuteStore,
    logs: logsStore,
    logElement: logElementStore
  }
})

export function useStore () {
  return baseUseStore(key)
}
