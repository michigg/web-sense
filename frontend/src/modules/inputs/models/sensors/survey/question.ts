import { toRaw } from 'vue'
import { QuestionType } from '@/modules/inputs/models/sensors/survey/questionType'

export interface ApiQuestion {
  id: string,
  type: string,
  title: string,
  question: string,
  options?: any
}

export class Question {
  readonly id: string
  readonly type: QuestionType
  readonly title: string
  readonly question: string
  readonly options?: any
  answer?: object | number | string | boolean

  constructor (
    id: string,
    type: QuestionType,
    title: string,
    question: string,
    options: any = undefined,
    answer: object | number | string | boolean | undefined = undefined
  ) {
    this.id = id
    this.type = type
    this.title = title
    this.question = question
    this.options = options
    this.answer = answer
  }

  clone (): Question {
    return toRaw(new Question(
      this.id,
      this.type,
      toRaw(this.title),
      toRaw(this.question),
      toRaw(this.options),
      toRaw(this.answer)
    ))
  }

  static fromApi (data: ApiQuestion): Question {
    return new Question(
      data.id,
      QuestionType[data.type as keyof typeof QuestionType],
      data.title,
      data.question,
      data.options
    )
  }
}
