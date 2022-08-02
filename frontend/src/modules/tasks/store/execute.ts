import type { Task } from "@/modules/tasks/models/task"
import type { TaskStepResult } from "@/modules/tasks/models/result"
import type { Sensor } from "@/modules/inputs/models/Sensor"
import { LogTask } from "@/modules/log/models/logTask"
import type { SensorTaskStep, TaskStep } from "@/modules/tasks/models/taskStep"
import type { InputType } from "@/modules/inputs/models/inputType"
import { defineStore } from "pinia"
import { useLogStore } from "@/modules/log/store/log"
import { useSensorStore } from "@/modules/inputs/store"
import { useTasksStore } from "@/modules/tasks/store/tasks"

interface TaskExecuteState {
  task: Task | undefined;
  currentTaskStepPosition: number;
  taskStepResults: Array<TaskStepResult>;
}

export const useTaskExecuteStore = defineStore("taskExecuteStore", {
  state: (): TaskExecuteState => ({
    task: undefined,
    currentTaskStepPosition: 0,
    taskStepResults: []
  }),
  getters: {
    getTask: (state: TaskExecuteState): Task | undefined => state.task,
    getCurrentTaskStep: (state: TaskExecuteState): TaskStep | undefined => {
      if (
        !state.task ||
        state.currentTaskStepPosition >= state.task.steps.length
      ) {
        return undefined
      }
      return state.task.steps[state.currentTaskStepPosition]
    },
    getCurrentTaskStepSensors (): Map<InputType, Sensor> {
      const taskStep = this.getCurrentTaskStep as SensorTaskStep
      if (!taskStep) {
        return new Map<InputType, Sensor>()
      }
      const sensorStore = useSensorStore()
      return sensorStore.getSensorsFromKeys(taskStep.inputTypes)
    },
    isLastTaskStep: (state: TaskExecuteState) =>
      state.task &&
      state.currentTaskStepPosition + 1 === state.task.steps.length,
    getLogTask: (state: TaskExecuteState) =>
      state.task
        ? LogTask.fromResults(state.task, state.taskStepResults)
        : undefined
  },
  actions: {
    init () {
      this.$reset()
    },
    initTask (taskId: number) {
      const tasksStore = useTasksStore()
      const task = tasksStore.getTask(taskId)

      this.init()
      this.setTask(task)
    },
    setTask (task: Task | undefined) {
      this.task = task
    },
    setCurrentTaskStepPosition (position: number) {
      this.currentTaskStepPosition = position
    },
    nextTaskStep () {
      if (!this.task) {
        // TODO: improve error handling
        throw Error("No task given.")
      }
      if (this.currentTaskStepPosition === this.task.steps.length - 1) {
        // TODO: improve error handling
        throw Error("Current Step is already the last one.")
      }
      this.setCurrentTaskStepPosition(this.currentTaskStepPosition + 1)
    },
    addResult (taskStepResult: TaskStepResult) {
      if (this.task == null) {
        // TODO: improve error handling
        throw Error("No task given.")
      }
      this.taskStepResults.push(taskStepResult)
    },
    async save ({ contribute }: { contribute: boolean }): Promise<number> {
      const logStore = useLogStore()
      const log = this.getLogTask
      if (log == null) {
        throw Error("Log task missing")
      }
      return await logStore.addTaskResults({
        log,
        contribute
      })
    }
  }
})
