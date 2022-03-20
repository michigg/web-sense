import { BaseError } from '@/shared/exceptions'

export class TaskRepositoryError extends BaseError {
  constructor (message: string, error: Error | undefined = undefined) {
    super(message, error)
    this.name = 'TaskRepositoryError'
  }
}

export class TaskError extends BaseError {
  constructor (message: string, error: Error | undefined = undefined) {
    super(message, error)
    this.name = 'TaskError'
  }
}
