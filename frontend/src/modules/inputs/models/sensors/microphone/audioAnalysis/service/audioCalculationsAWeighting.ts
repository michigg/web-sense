export const AudioCalculationsAWeighting = {
  _calcAWeighting (frequency: number): number {
    /**
     * Calculates the a weighting of a given frequency
     *
     * Used formular shown at
     * https://www.schweizer-fn.de/akustik/schallpegelaenderung/schallpegel.php#berech_schallpegel_bewertungfaktoren
     *
     * @param frequency - the frequency the a weigthing shall be calculated for
     * @returns the calculated a weighting
     */
    const fSquared = Math.pow(frequency, 2)
    const aSquared = 148693636 // 12194^2
    const bSquared = 423.9481 // 20.59^2
    const cSquared = 11577.76 // 107.6^2
    const dSquared = 544348.84 // 737.8^2

    // 12194^2 * f^4
    const numerator = aSquared * Math.pow(fSquared, 2)
    // (f^2 + 20.6^2) * sqrt((f^2 * 107.7^2) (f^2 * 737.9^2) (f^2 * 12194^2))

    const denominator =
      +(fSquared + aSquared).toFixed(8) *
      +(fSquared + bSquared).toFixed(8) *
      +Math.sqrt(fSquared + cSquared).toFixed(8) *
      +Math.sqrt(fSquared + dSquared).toFixed(8)
    const a = +(numerator / denominator).toFixed(8)
    const aWeight = 20 * Math.log10(a) + 2
    return Number((aWeight).toFixed(1))
  },
  calcAWeightings (frequencies: Array<number>, minDB = -80.0): Array<number> {
    /**
     * generates the a weightings based on the given frequencies.
     * If a weighting is below <code>minDB</code> the <code>minDB</code> value is used instead.
     *
     * @param frequencies - the frequencies the a weigthings shall be calculated for
     * @param minDB - the minimum decibel value (defaults to -80 dB(A))
     * @returns the calculated a weightings
     */
    return frequencies.map(frequency => {
      const weight = this._calcAWeighting(frequency)
      return weight > minDB ? weight : minDB
    })
  },
  calcDBAUsingWeighting (db: number, aWeighting: number): number {
    /**
     * calculates the dba value using the db value and the a-weighting.
     *
     * @param db - the pressure ratio in decibel
     * @param aWeighting - the aWeighting in decibel
     * @returns the calculated a weightings
     */
    const dba = db + aWeighting
    // return dba < 0 ? 0 : +(dba.toFixed(2))
    return Number(dba.toFixed(4))
  },
  convertDBSpectrumToDBAsSpectrum (dbs: number[], aWeightings: number[]): number[] {
    /**
     * calculates the dba values using the db values and the a-weighting values.
     *
     * @param dbs - the dB values that shall be converted to a-weighted dB values
     * @param aWeightings - the aWeightings that shall be used to convert the dB values
     * @returns the calculated dB(A) values
     */
    const dbas = []
    for (const [index, value] of dbs.entries()) {
      dbas.push(this.calcDBAUsingWeighting(value, aWeightings[index]))
    }
    return dbas
  }
}
