import { Commit } from 'vuex'
import { logDB } from '@/modules/log/models/logIDB'
import { LogTask } from '@/modules/log/models/logTask'
import { useInflux } from '@/shared/composables/services/useInflux'
import { useThingsBoard } from '@/shared/composables/services/useThingsBoard'
import { useContribute } from '@/modules/log/composables/useContribute'

interface LogState {
  logs: Array<LogTask>
}

export const logsStore = {
  namespaced: true,
  state: (): LogState => ({
    logs: []
  }),
  getters: {
    getLogs: (state: LogState): Array<LogTask> => state.logs
  },
  mutations: {
    ADD_LOG (state: LogState, log: LogTask) {
      state.logs.push(log)
    },
    SET_LOG (state: LogState, logs: Array<LogTask>) {
      state.logs = logs
    }
  },
  actions: {
    async init ({ commit }: { commit: Commit }) {
      const logs = await logDB.getTaskLogs()
      commit('SET_LOG', logs)
    },
    async addTaskResults (
      { commit }: { commit: Commit },
      {
        log,
        contribute
      }: { log: LogTask, contribute: boolean }): Promise<number> {
      const idbLogTask = await logDB.putTaskLog(log.toIDB())
      const savedLogTask = LogTask.fromIDB(idbLogTask)
      if (!savedLogTask || savedLogTask.pKey === undefined) {
        throw Error('Messung konnte nicht gespeichert werden!')
      }
      commit('ADD_LOG', log)
      if (contribute) {
        try {
          const contribute = useContribute()
          await contribute(log)
        } catch (e) {
          console.error(e)
          throw Error('Messung konnte nicht übermittelt werden.')
        } finally {
          commit('ADD_LOG', savedLogTask)
        }
      } else {
        commit('ADD_LOG', savedLogTask)
      }
      return savedLogTask.pKey
    }
  }
}
