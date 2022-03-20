export class BaseError extends Error {
  public readonly cause: Error | undefined

  constructor (message: string, cause: Error | undefined = undefined) {
    super(message)
    this.name = 'BaseError'
    this.cause = cause
  }
}
