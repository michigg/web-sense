import { BaseError } from "@/shared/exceptions"

export class SensorRepositoryError extends BaseError {
  constructor (message: string, error: Error | undefined = undefined) {
    super(message, error)
    this.name = "SensorRepositoryError"
  }
}

export class SensorServiceError extends BaseError {
  constructor (message: string, error: Error | undefined = undefined) {
    super(message, error)
    this.name = "SensorServiceError"
  }
}

export class SensorError extends BaseError {
  constructor (message: string, error: Error | undefined = undefined) {
    super(message, error)
    this.name = "SensorError"
  }
}
