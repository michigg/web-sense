import { useInflux } from "@/shared/composables/services/useInflux"
import { useThingsBoard } from "@/shared/composables/services/useThingsBoard"
import { logDB } from "@/modules/log/models/logIDB"
import type { LogTask } from "@/modules/log/models/logTask"

export function useContribute (): (log: LogTask) => Promise<LogTask> {
  return async (log: LogTask) => {
    if (import.meta.env.VITE_INFLUX_ENDPOINT) {
      const { influxWrite } = useInflux()
      await influxWrite(log)
    }

    if (import.meta.env.VITE_THINGSBOARD_ENDPOINT) {
      const { sendTelemetry } = useThingsBoard()
      await sendTelemetry(log)
    }

    log.transmitted = true
    await logDB.putTaskLog(log.toIDB())
    return log
  }
}
