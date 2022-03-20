import { Commit } from 'vuex'
import { logDB } from '@/modules/log/models/logIDB'
import { LogTask } from '@/modules/log/models/logTask'
import { useContribute } from '@/modules/log/composables/useContribute'

interface LogElementState {
  logElement: LogTask | undefined
}

export const logElementStore = {
  namespaced: true,
  state: (): LogElementState => ({
    logElement: undefined
  }),
  getters: {
    getLogElement: (state: LogElementState): LogTask | undefined => state.logElement
  },
  mutations: {
    SET_LOG_ELEMENT (state: LogElementState, logElement: LogTask | undefined) {
      state.logElement = logElement
    }
  },
  actions: {
    async init ({ commit }: { commit: Commit }, taskLogPKey: number) {
      const logElement = await logDB.getTaskLog(taskLogPKey)
      commit('SET_LOG_ELEMENT', LogTask.fromIDB(logElement))
    },
    async contribute ({
      state,
      commit
    }: { state: LogElementState, commit: Commit }) {
      if (!state.logElement) {
        throw Error('Die Messung wurde nicht gefunden.')
      }
      if (state.logElement.transmitted) {
        throw Error('Die Messung wurde bereits übermittelt.')
      }
      try {
        let log = state.logElement.clone()
        const contribute = useContribute()
        log = await contribute(log)
        commit('SET_LOG_ELEMENT', log)
      } catch (e) {
        throw Error('Daten konnten nicht übermittelt werden.')
      }
    }
  }
}
