import type {AbstractSensorType} from "@/modules/inputs/models/sensors/abstractSensor"
import {readonly, ref, watch} from "vue"
import type {WatchStopHandle} from "@vue/runtime-core"
import {useLogging} from "@/shared/composables/useLogging"
import {Result, TaskStepResult} from "@/modules/tasks/models/result"
import {useLogStore} from "@/modules/log/store/log"
import {LogTask} from "@/modules/log/models/logTask"
import {Task} from "@/modules/tasks/models/task"
import {TaskStep} from "@/modules/tasks/models/taskStep"

const {logDebug, logWarn, logInfo} = useLogging('useSensorRecord', 'oklch(70% 0.173 160)')

export function useSensorRecord(sensor: AbstractSensorType) {
  const isRecording = ref(false)
  const unwatchHandler = ref<WatchStopHandle>()
  const results = ref<Result[]>([])

  const startRecording = () => {
    isRecording.value = true
    unwatchHandler.value = watch(sensor.currentResult, (newResult) => {
      if (!newResult) {
        logWarn(`[${sensor.key}]: Result is empty. Skip.`)
        return
      }
      results.value.push(newResult)
    }, {immediate: true})
    logDebug(`[${sensor.key}]: Recording started.`)
  }

  const stopRecording = () => {
    if (!unwatchHandler.value) {
      logWarn(`[${sensor.key}]: Nothing to stop!`)
      return
    }
    unwatchHandler.value()
    isRecording.value = false
    logDebug(`[${sensor.key}]: Recording stopped.`)
  }

  const saveRecording = async (): Promise<number> => {
    const logStore = useLogStore()
    const sensorStep = new TaskStep(
      sensor.key,
      sensor.key,
      sensor.key,
      [],
      '',
      [sensor.key]
    )
    const log = LogTask.fromResults(
      new Task(
        -1,
        sensor.key,
        `${sensor.key} - Test Messung`,
        {},
        [
          sensorStep
        ]
      ),
      [
        new TaskStepResult(
          sensorStep,
          results.value
        )
      ]
    )
    const logKey = await logStore.addTaskResults({
      log,
      contribute: false
    })
    logInfo(`[${sensor.key}]: Recording saved as log ${logKey}`)
    return logKey
  }

  const clearRecording = (): void => {
    results.value = []
    logInfo(`[${sensor.key}]: Recordings cleared`)
  }

  return {
    isRecording: readonly(isRecording),
    startRecording,
    stopRecording,
    saveRecording,
    clearRecording
  }
}
