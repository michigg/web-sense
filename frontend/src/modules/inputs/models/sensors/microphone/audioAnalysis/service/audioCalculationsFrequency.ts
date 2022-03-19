const LOWEST_AUDIBLE_FREQUENCY = 20
const HIGHEST_AUDIBLE_FREQUENCY = 20000 // 70000

export const AudioCalculationsFrequency = {
  _frequencyResolution (sampleRate: number, bufferSize: number): number {
    /**
     * Calculates the frequency resolution (sample rate / buffer size) based on the sample rate and buffer size
     *
     * @param sampleRate - the sample rate of a fft
     * @param bufferSize - the buffer size of a fft (sample rate / buffer size)
     * @returns the calculated frequency resolution round to 4 decimals
     */
    return Number((sampleRate / bufferSize).toFixed(4))
  },
  _frequency (binIndex: number, frequencyResolution: number): number {
    /**
     * Calculates the frequency based on the bin index and the frequency resolution
     *
     * @param binIndex - the bin position of a fft
     * @param frequencyResolution - the frequency resolution of a fft (sample rate / buffer size)
     * @returns the calculated frequency round to 4 decimals
     */
    return Number((binIndex * frequencyResolution).toFixed(4))
  },
  _frequenciesUsingFrequencyResolution (frequencyResolution: number, bufferSize: number): Array<number> {
    /**
     * Calculates the frequencies based on the frequency resolution and buffer size
     *
     * @param frequencyResolution - the frequency resolution (sample rate / buffer size)
     * @param bufferSize - the buffer size that is used to calculate the frequencies
     * @returns the frequency spectrum of the fft
     */
    const frequencies = []
    for (let i = 0; i < bufferSize / 2; i++) {
      frequencies.push(this._frequency(i, frequencyResolution))
    }
    return frequencies
  },
  frequenciesUsingSampleRateBufferSize (sampleRate: number, bufferSize: number): Array<number> {
    /**
     * Calculates the frequencies based on the sample rate and buffer size
     *
     * @param sampleRate - the sample rate that is used to calculate the frequencies
     * @param bufferSize - the buffer size that is used to calculate the frequencies
     * @returns the frequency spectrum of the fft
     */
    const frequencyResolution = this._frequencyResolution(sampleRate, bufferSize)
    return this._frequenciesUsingFrequencyResolution(frequencyResolution, bufferSize)
  },
  lowestAudibleBin (frequencyResolution: number, lowestAudibleFrequency = LOWEST_AUDIBLE_FREQUENCY): number {
    const calculatedLowestAudibleBin = lowestAudibleFrequency / frequencyResolution
    const lowestAudibleBin = Math.floor(calculatedLowestAudibleBin)
    if (lowestAudibleBin !== calculatedLowestAudibleBin) {
      return lowestAudibleBin + 1
    }
    return lowestAudibleBin
  },
  highestAudibleBin (frequencyResolution: number, highestAudibleFrequency = HIGHEST_AUDIBLE_FREQUENCY): number {
    return Math.trunc(highestAudibleFrequency / frequencyResolution)
  },
  audibleBins (input: Array<number>, lowestAudibleBin: number, highestAudibleBin: number): Array<number> {
    return input.slice(lowestAudibleBin, highestAudibleBin)
  },
  removeInaudibleBinsFromSpectrumList (spectrumList: number[][], sampleRate: number, bufferSize: number): number[][] {
    const frequencyResolution = this._frequencyResolution(sampleRate, bufferSize)
    const lowestAudibleBin = this.lowestAudibleBin(frequencyResolution)
    const highestAudibleBin = this.highestAudibleBin(frequencyResolution)
    return spectrumList.map(spectrum => this.audibleBins(spectrum, lowestAudibleBin, highestAudibleBin))
  }
}
