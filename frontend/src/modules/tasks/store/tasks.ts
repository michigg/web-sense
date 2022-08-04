import { taskDB } from "@/modules/tasks/models/taskIDB"
import { useTaskRepository } from "@/modules/tasks/repositories/tasks"
import { defineStore } from "pinia"
import type { Task } from "@/modules/tasks/models/task"

interface TasksState {
  tasks: Map<number, Task>;
}

export const useTasksStore = defineStore("tasksStore", {
  state: (): TasksState => ({
    tasks: new Map<number, Task>()
  }),
  getters: {
    getTasks: (state: TasksState) => new Map(state.tasks),
    getTask: (state: TasksState) => (taskId: number) => state.tasks.get(taskId)
  },
  actions: {
    setTasks (tasks: Map<number, Task>) {
      this.tasks = tasks
    },
    setApproved ({
      taskId,
      approved
    }: { taskId: number; approved: boolean }) {
      const task = this.tasks.get(taskId)
      if (!task) {
        throw Error("Task not found!")
      }
      task.approved = approved
    },
    async fetchTasks () {
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
      this.setTasks(tasksMap)
    },
    async setApprovedState ({
      taskId,
      approved
    }: {
      taskId: number;
      approved: boolean;
    }) {
      await taskDB.addTaskOrUpdate({
        id: taskId,
        approved: approved
      })
      this.setApproved({
        taskId,
        approved
      })
    }
  }
})
