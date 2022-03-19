import { APITaskStep, TaskStep } from '@/modules/tasks/models/taskStep'
import { InputType } from '@/modules/inputs/models/inputType'

export interface APITask {
  id: number
  title: string
  description: string
  inputDescriptions: { [inputType: string]: string }
  steps: Array<APITaskStep>
  resultActivityComponentName?: string
}

export class Task {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly inputDescriptions: { [inputType: string]: string }
  readonly steps: Array<TaskStep>
  readonly resultActivityComponentName?: string
  approved: boolean

  constructor (
    id: number,
    title: string,
    description: string,
    inputDescription: { [inputType: string]: string },
    steps: Array<TaskStep>,
    resultActivityComponentName?: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.approved = false
    this.inputDescriptions = inputDescription
    this.steps = steps
    this.resultActivityComponentName = resultActivityComponentName
  }

  static fromApi (data: APITask): Task {
    return new Task(
      data.id,
      data.title,
      data.description,
      data.inputDescriptions,
      data.steps.map(apiTaskStep => TaskStep.fromApi(apiTaskStep)),
      data.resultActivityComponentName
    )
  }

  getInputs (): Array<InputType> {
    let inputTypes: Array<InputType> = []
    for (const step of this.steps) {
      inputTypes = [...inputTypes, ...step.inputTypes]
    }
    return [...new Set(inputTypes)]
  }
}
