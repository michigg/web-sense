import { Task } from '@/modules/tasks/models/task'
import { Commit } from 'vuex'
import { taskDB } from '@/modules/tasks/models/taskIDB'
import { useTaskRepository } from '@/modules/tasks/repositories/tasks'

interface TasksState {
  tasks: Map<number, Task>
}

export const tasksStore = {
  namespaced: true,
  state: (): TasksState => ({
    tasks: new Map<number, Task>()
  }),
  getters: {
    getTasks: (state: TasksState) => new Map(state.tasks),
    getTask: (state: TasksState) => (taskId: number) => state.tasks.get(taskId)
  },
  mutations: {
    SET_TASKS (state: TasksState, tasks: Map<number, Task>) {
      state.tasks = tasks
    },
    SET_APPROVED (state: TasksState, {
      taskId,
      approved
    }: { taskId: number, approved: boolean }) {
      const task = state.tasks.get(taskId)
      if (!task) {
        throw Error('Task not found!')
      }
      task.approved = approved
    }
  },
  actions: {
    async fetchTasks ({ commit }: { commit: Commit }) {
      const tasksMap = new Map<number, Task>()
      const { getTasks } = useTaskRepository()
      const tasks = await getTasks()
      for (const task of tasks) {
        const taskState = await taskDB.getTask(task.id)
        if (taskState) {
          task.approved = taskState.approved
        }
        tasksMap.set(task.id, task)
      }
      commit('SET_TASKS', tasksMap)
    },
    async setApprovedState ({ commit }: { commit: Commit }, {
      taskId,
      approved
    }: { taskId: number, approved: boolean }) {
      await taskDB.addTaskOrUpdate({
        id: taskId,
        approved: approved
      })
      commit('SET_APPROVED', {
        taskId,
        approved
      })
    }
  }
}
