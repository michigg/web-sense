export function useLogging(moduleName: string, color: string = 'unset') {
  const logError = (msg: string, e?: unknown): void => {
    if (!e) {
      console.error(`[${moduleName}]: ${msg}`)
    }
    console.error(`[${moduleName}]: ${msg}`, e)
  }

  const logWarn = (msg: string): void => {
    console.warn(`[${moduleName}]: ${msg}`)
  }

  const logInfo = (msg: string): void => {
    console.info(`[${moduleName}]: ${msg}`)
  }

  const logDebug = (msg: string): void => {
    console.debug(`%c [${moduleName}]:`, `font-weight: bold; color: ${color}`, msg)
  }

  return {logDebug, logInfo, logWarn, logError}
}
