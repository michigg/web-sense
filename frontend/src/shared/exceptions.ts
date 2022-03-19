export class BaseError extends Error {
  public readonly cause: Array<Error> | Error | undefined

  constructor (message: string, cause: Array<Error> | Error | undefined = undefined) {
    super(message)
    this.name = 'BaseError'
    this.cause = cause
  }
}
