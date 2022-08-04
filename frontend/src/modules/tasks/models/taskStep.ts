import type { ITaskStepInstruction } from "@/modules/tasks/models/taskStepInstruction"
import { Question } from "@/modules/inputs/models/sensors/survey/question"
import type { ApiQuestion } from "@/modules/inputs/models/sensors/survey/question"
import { InputType } from "@/modules/inputs/models/inputType"
import { TaskError } from "@/modules/tasks/exceptions"

export interface APITaskStep {
  id: string
  type: string
  title: string
  description: string
  instructions: Array<ITaskStepInstruction>
  activityComponentName?: string
  inputTypes?: Array<string>
  questions?: ApiQuestion[]
  resultActivityComponentName: string
}

enum TaskStepType {
  SurveyTaskStep = "SurveyTaskStep",
  SensorTaskStep = "SensorTaskStep",
}

export class TaskStep {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly instructions: Array<ITaskStepInstruction>
  readonly activityComponentName: string
  readonly inputTypes: Array<InputType>
  readonly resultActivityComponentName: string

  constructor (
    id: string,
    title: string,
    description: string,
    instructions: Array<ITaskStepInstruction>,
    activityComponentName: string,
    inputTypes: Array<InputType>,
    resultActivityComponentName?: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.instructions = instructions
    this.activityComponentName = activityComponentName
    this.inputTypes = inputTypes
    this.resultActivityComponentName =
      resultActivityComponentName || "ActivityDefault"
  }

  clone () {
    return new TaskStep(
      this.id,
      this.title,
      this.description,
      this.instructions,
      this.activityComponentName,
      this.inputTypes
    )
  }

  static fromApi (apiTaskStep: APITaskStep) {
    const taskStepType =
      TaskStepType[apiTaskStep.type as keyof typeof TaskStepType]
    if (taskStepType === TaskStepType.SensorTaskStep) {
      if (!apiTaskStep.activityComponentName) {
        throw new TaskError(
          "Ein Schritt der Aktivität konnte nicht geladen werden. Es wurde keine Komponente angegben."
        )
      }
      if (!apiTaskStep.inputTypes) {
        throw new TaskError(
          "Ein Schritt der Aktivität konnte nicht geladen werden. Es wurden keine Eingabetypen angegeben."
        )
      }
      return new SensorTaskStep(
        apiTaskStep.id,
        apiTaskStep.title,
        apiTaskStep.description,
        apiTaskStep.instructions,
        apiTaskStep.activityComponentName,
        apiTaskStep.inputTypes.map(
          (inputType) => InputType[inputType as keyof typeof InputType]
        ),
        apiTaskStep.resultActivityComponentName
      )
    } else {
      if (apiTaskStep.questions == null) {
        throw Error("Task is survey task but no question can be found.")
      }
      const questions = apiTaskStep.questions.map((apiQuestions: ApiQuestion) =>
        Question.fromApi(apiQuestions)
      )
      const questionsMap = new Map<string, Question>()
      for (const question of questions) {
        questionsMap.set(question.id, question)
      }

      return new SurveyTaskStep(
        apiTaskStep.id,
        apiTaskStep.title,
        apiTaskStep.description,
        apiTaskStep.instructions,
        questionsMap,
        apiTaskStep.resultActivityComponentName
      )
    }
  }
}

export class SurveyTaskStep extends TaskStep {
  readonly questions: Map<string, Question>

  constructor (
    id: string,
    title: string,
    description: string,
    instructions: Array<ITaskStepInstruction>,
    questions: Map<string, Question>,
    resultActivityComponentName?: string
  ) {
    super(
      id,
      title,
      description,
      instructions,
      "ActivitySurvey",
      [InputType.SURVEY, InputType.GEOLOCATION],
      resultActivityComponentName
    )
    this.questions = questions
  }
}

export class SensorTaskStep extends TaskStep {
}
