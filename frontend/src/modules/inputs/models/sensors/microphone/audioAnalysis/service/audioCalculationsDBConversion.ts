import {
  AudioCalculationBasicConversion
} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsBasicConversion"

export const AudioCalculationDBConversion = {
  _calcRMS (pressures: Array<number>): number {
    /**
     * returns the root mean square of the given array
     *
     * See: https://en.wikipedia.org/wiki/Root_mean_square#Definition
     *
     * @param pressures - pressures used in the calculation
     * @returns root mean square
     */
    const sum = (pressures as number[]).reduce(
      (accumulator: number, currentValue: number) =>
        accumulator + Math.pow(currentValue, 2),
      0
    )
    return Math.sqrt(sum / pressures.length)
  },
  magnitudeSpectrumToDBSpectrum (spectrum: Array<number>): Array<number> {
    /**
     * Convertes a specturm magnitude array to the db values.
     *
     * @param spectrum - spectrum magnitude array that shall be converted to decibels
     * @returns the decibel values
     */
    return spectrum.map((value) =>
      AudioCalculationBasicConversion.magnitudeToDB(value)
    )
  },
  dbSpectrumToDB (dbSpectrum: Array<number>): number {
    /**
     * Calculates a single decibel value given multiple decibels from the frequency domain
     *
     * @param dbs - array of db or dba values
     * @returns db value that is derived from the dbs param
     */
      // if (!dbSpectrum.some(x => x >= 0)) {
      //   return -80
      // }
      // Calculate the original pressure
    const originalMagnitudes = dbSpectrum.map((db) =>
        AudioCalculationBasicConversion.dbToMagnitude(db)
      )
    // calculate the root mean square of the original pressures
    const rmsPressure = this._calcRMS(originalMagnitudes)
    return AudioCalculationBasicConversion.magnitudeToDB(rmsPressure)
  },
  averageSPL (dbs: Array<number>): number {
    /**
     * Calculates a single decibel value given multiple decibels from the frequency domain
     *
     * @param dbs - array of db or dba values
     * @returns db value that is derived from the dbs param
     */
    const powerRatiosSum = dbs.reduce(
      (accumulator, currentDB) =>
        accumulator + AudioCalculationBasicConversion.dbToPowerRatio(currentDB),
      0
    )
    const N = dbs.length
    // Mittelungspegel
    // siehe https://de.wikipedia.org/wiki/Mittelungspegel
    // see https://www.hlnug.de/themen/laerm/akustische-grundlagen/rechnen-mit-schallpegeln
    return AudioCalculationBasicConversion.powerRatioToDB(powerRatiosSum / N)
  },
  totalSPL (dbs: Array<number>): number {
    /**
     * Calculates a single decibel value given multiple decibels from the frequency domain
     *
     * @param dbs - array of db or dba values
     * @returns db value that is derived from the dbs param
     */
    const powerRatiosSum = dbs.reduce(
      (accumulator, currentDB) =>
        accumulator + AudioCalculationBasicConversion.dbToPowerRatio(currentDB),
      0
    )
    // Summenpegel
    // see https://www.hlnug.de/themen/laerm/akustische-grundlagen/rechnen-mit-schallpegeln
    return AudioCalculationBasicConversion.powerRatioToDB(powerRatiosSum)
  }
}
