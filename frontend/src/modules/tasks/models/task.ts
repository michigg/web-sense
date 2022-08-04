import { TaskStep } from "@/modules/tasks/models/taskStep"
import type { APITaskStep } from "@/modules/tasks/models/taskStep"
import type { InputType } from "@/modules/inputs/models/inputType"

export interface APITask {
  id: number;
  title: string;
  description: string;
  inputDescriptions: { [inputType: string]: string };
  steps: Array<APITaskStep>;
  resultActivityComponentName?: string;
}

export class Task {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly inputDescriptions: {
    [inputType in keyof typeof InputType]?: string;
  }
  readonly steps: Array<TaskStep>
  readonly resultActivityComponentName?: string
  approved: boolean

  constructor (
    id: number,
    title: string,
    description: string,
    inputDescription: { [inputType in keyof typeof InputType]?: string },
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
    // eslint-disable-next-line
    const typedInputDescriptions: any = {}
    for (const [key, value] of Object.entries(data.inputDescriptions)) {
      const typedKey = key as keyof typeof InputType
      typedInputDescriptions[typedKey] = value
    }

    return new Task(
      data.id,
      data.title,
      data.description,
      typedInputDescriptions,
      data.steps.map((apiTaskStep) => TaskStep.fromApi(apiTaskStep)),
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
