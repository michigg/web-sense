import { logDB } from "@/modules/log/models/logIDB"
import { LogTask } from "@/modules/log/models/logTask"
import { useContribute } from "@/modules/log/composables/useContribute"
import { defineStore } from "pinia"

interface LogState {
  logs: Array<LogTask>;
}

export const useLogStore = defineStore("log", {
  state: (): LogState => ({
    logs: []
  }),
  getters: {
    getLogs: (state: LogState): Array<LogTask> => state.logs
  },
  actions: {
    async init () {
      const logs = await logDB.getTaskLogs()
      this.setLog(
        logs
          .map((idbLog) => LogTask.fromIDB(idbLog))
          .filter((log) => log != null) as LogTask[]
      )
    },
    async loadLog (taskId?: number) {
      const logs = await logDB.getTaskLogs(taskId)
      this.setLog(
        logs
          .map((idbLog) => LogTask.fromIDB(idbLog))
          .filter((log) => log != null) as LogTask[]
      )
    },
    async addTaskResults ({
      log,
      contribute
    }: {
      log: LogTask;
      contribute: boolean;
    }): Promise<number> {
      const idbLogTask = await logDB.putTaskLog(log.toIDB())
      const savedLogTask = LogTask.fromIDB(idbLogTask)
      if (!savedLogTask || savedLogTask.pKey === undefined) {
        throw Error("Messung konnte nicht gespeichert werden!")
      }

      this.addLog(log)
      if (contribute) {
        try {
          const contribute = useContribute()
          await contribute(log)
        } catch (e) {
          throw Error("Messung konnte nicht übermittelt werden.")
        } finally {
          this.addLog(savedLogTask)
        }
      } else {
        this.addLog(savedLogTask)
      }
      return savedLogTask.pKey
    },
    addLog (log: LogTask) {
      this.logs.push(log)
    },
    setLog (logs: Array<LogTask>) {
      this.logs = logs
    }
  }
})
