import { logDB } from "@/modules/log/models/logIDB"
import { LogTask } from "@/modules/log/models/logTask"
import { useContribute } from "@/modules/log/composables/useContribute"
import { defineStore } from "pinia"

interface LogElementState {
  logElement: LogTask | undefined;
}

export const useLogElementStore = defineStore("logElement", {
  state: (): LogElementState => ({
    logElement: undefined
  }),
  getters: {
    getLogElement: (state: LogElementState): LogTask | undefined =>
      state.logElement
  },
  actions: {
    setLogElement (logElement: LogTask | undefined) {
      this.logElement = logElement
    },
    async init (taskLogPKey: number) {
      const logElement = await logDB.getTaskLog(taskLogPKey)
      this.setLogElement(LogTask.fromIDB(logElement))
    },
    async contribute () {
      if (!this.logElement) {
        throw Error("Die Messung wurde nicht gefunden.")
      }
      if (this.logElement.transmitted) {
        throw Error("Die Messung wurde bereits übermittelt.")
      }
      try {
        let log = this.logElement.clone()
        const contribute = useContribute()
        log = await contribute(log)
        this.setLogElement(log)
      } catch (e) {
        throw Error("Daten konnten nicht übermittelt werden.")
      }
    }
  }
})
