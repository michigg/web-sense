import { BaseError } from "@/shared/exceptions"
import { Task } from "@/modules/tasks/models/task"
import type { APITask } from "@/modules/tasks/models/task"
import axios, { AxiosError } from "axios"
import { TaskRepositoryError } from "@/modules/tasks/exceptions"

export function useTaskRepository () {
  const getTasks = async (): Promise<Array<Task>> => {
    try {
      const url = import.meta.env.VITE_TASK_ENDPOINT
      if (!url) {
        // TODO: fix
        throw new BaseError("")
      }
      const response = await axios.get(url)
      return response.data.map((apiTask: APITask) => Task.fromApi(apiTask))
    } catch (e) {
      const error = e as Error | AxiosError
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status >= 500) {
          throw new TaskRepositoryError(
            "Die Aktivitäten konnten nicht geladen werden. Internerer Fehler. Bitte versuchen Sie es später erneut",
            error
          )
        } else {
          throw new TaskRepositoryError(
            "Die Aktivitäten konnten nicht geladen werden. Server meldet fehlerhafte Anfrage. Bitte laden Sie die Seite neu und versuchen Sie es erneut. Wenn der Fehler bestehen bleibt wenden Sie sich bitte an den Support.",
            error
          )
        }
      } else if (axios.isAxiosError(error) && error.request) {
        throw new TaskRepositoryError(
          "Die Aktivitäten konnten nicht geladen werden. Verbindung zum Server konnte nicht hergestellt werden.",
          error
        )
      } else {
        throw new TaskRepositoryError(
          "Die Aktivitäten konnten nicht geladen werden.",
          error
        )
      }
    }
  }

  return { getTasks }
}
