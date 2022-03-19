import { Task } from '@/modules/tasks/models/task'
import { Commit, Dispatch } from 'vuex'
import { TaskStepResult } from '@/modules/tasks/models/result'
import { Sensor } from '@/modules/inputs/models/Sensor'
import { LogTask } from '@/modules/log/models/logTask'
import { SensorTaskStep, TaskStep } from '@/modules/tasks/models/taskStep'
import { InputType } from '@/modules/inputs/models/inputType'

interface TaskExecuteState {
  task: Task | undefined
  currentTaskStepPosition: number,
  taskStepResults: Array<TaskStepResult>
}

export const taskExecuteStore = {
  namespaced: true,
  state: (): TaskExecuteState => ({
    task: undefined,
    currentTaskStepPosition: 0,
    taskStepResults: []
  }),
  getters: {
    getTask: (state: TaskExecuteState): Task | undefined => state.task,
    getCurrentTaskStep: (state: TaskExecuteState): TaskStep | undefined => {
      if (!state.task || state.currentTaskStepPosition >= state.task.steps.length) {
        return undefined
      }
      return state.task.steps[state.currentTaskStepPosition]
    },
    getCurrentTaskStepSensors: (state: TaskExecuteState, getters: any, rootState: any, rootGetters: any): Map<InputType, Sensor> => {
      const taskStep = getters.getCurrentTaskStep as SensorTaskStep
      if (!taskStep) {
        return new Map<InputType, Sensor>()
      }
      return rootGetters['sensors/getSensorsFromKeys'](taskStep.inputTypes)
    },
    isLastTaskStep: (state: TaskExecuteState) => state.task && state.currentTaskStepPosition + 1 === state.task.steps.length,
    getLogTask: (state: TaskExecuteState) => state.task ? LogTask.fromResults(state.task, state.taskStepResults) : undefined
  },
  mutations: {
    INIT (state: TaskExecuteState) {
      state.taskStepResults = []
      state.currentTaskStepPosition = 0
      state.task = undefined
    },
    SET_TASK (state: TaskExecuteState, task: Task) {
      state.task = task
    },
    SET_CURRENT_TASK_STEP_POSITION (state: TaskExecuteState, position: number) {
      state.currentTaskStepPosition = position
    },
    ADD_RESULT (state: TaskExecuteState, taskStepResult: TaskStepResult) {
      state.taskStepResults.push(taskStepResult)
    }
  },
  actions: {
    init ({
      rootGetters,
      commit
    }: { rootGetters: any, commit: Commit }, taskId: number) {
      const task = rootGetters['tasks/getTask'](taskId)
      commit('INIT')
      commit('SET_TASK', task)
    },
    nextTaskStep ({
      state,
      commit
    }: { state: TaskExecuteState, commit: Commit }) {
      if (!state.task) {
        // TODO: improve error handling
        throw Error('No task given.')
      }
      if (state.currentTaskStepPosition === state.task.steps.length - 1) {
        // TODO: improve error handling
        throw Error('Current Step is already the last one.')
      }
      commit('SET_CURRENT_TASK_STEP_POSITION', state.currentTaskStepPosition + 1)
    },
    addResult ({
      state,
      commit
    }: { state: TaskExecuteState, commit: Commit }, taskStepResult: TaskStepResult) {
      if (!state.task) {
        // TODO: improve error handling
        throw Error('No task given.')
      }
      commit('ADD_RESULT', taskStepResult)
    },
    async save ({
      getters,
      dispatch
    }: { getters: any, dispatch: Dispatch }, { contribute }: { contribute: boolean }): Promise<number> {
      return await dispatch('logs/addTaskResults', {
        log: getters.getLogTask,
        contribute
      }, { root: true })
    }
  }
}
