const AUDITORY_THRESHOLD = 0.00002 // Auditory Threshold 0.00002 Pa
// eslint-disable-next-line
const PAIN_THRESHOLD = 200 // Pain Threshold 200 Pa

export const AudioCalculationBasicConversion = {
  magnitudeToDB (magnitude: number): number {
    /**
     * Calculates the decibel value out of the given magnitude.
     * It returns 0 if the magnitude value is below the <code>AUDITORY_THRESHOLD</code>.
     *
     * @param magnitude - magnitude that shall be converted
     * @returns the magnitudes db value
     */
    if (magnitude < 0.000000002) {
      return -80
    }
    const result = Number((20.0 * Math.log10(magnitude / AUDITORY_THRESHOLD)).toFixed(4))
    // negative zero fix
    if (result === 0) {
      return 0
    }
    return result
  },
  dbToPowerRatio (db: number): number {
    /**
     *  returns the inverse log of value in the decibel
     *  @param {number} db - decibel value
     *  @returns {number} inverse log of db value
     */
    return Number(Math.pow(10, (db / 10)).toFixed(4))
  },
  powerRatioToDB (pressureRatio: number): number {
    /**
     * Calculates the decibel value out of the given pressure ratio.
     *
     * @param pressureRatio - magnitude that shall be converted
     * @returns the magnitudes db value
     */
    if (pressureRatio < 0.0001) {
      return -80
    }
    return Number((10.0 * Math.log10(pressureRatio)).toFixed(4))
  },
  dbToMagnitude (db: number): number {
    /**
     * calculates the original pressure value given the <code>AUDITORY_THRESHOLD</code>.
     * The results are only correct if the pressure ratio is build using the <code>AUDITORY_THRESHOLD</code>.
     *
     * @param {number} pressureRatio - the pressure ratio that shall be converted to the original value
     * @returns {number} the pressure value the ratio is based on
     */
    if (db < -45) {
      return 0.000000002
    }
    return Number(Math.sqrt(this.dbToPowerRatio(db) * Math.pow(AUDITORY_THRESHOLD, 2)).toFixed(9))
  },
  _getMeasurementDurationInMs (sampleRate: number, bufferSize: number): number {
    return Number(((bufferSize / sampleRate) * 1000).toFixed(0))
  },
  removeFirstMeasurementsByDuration (array: number[] | number[][], sampleRate: number, bufferSize: number, durationMs = 1500): number[] | number[][] {
    const measurementDurationMs = this._getMeasurementDurationInMs(sampleRate, bufferSize)
    const entriesToRemove = Number((durationMs / measurementDurationMs).toFixed(0))
    return array.slice(entriesToRemove)
  }
}
