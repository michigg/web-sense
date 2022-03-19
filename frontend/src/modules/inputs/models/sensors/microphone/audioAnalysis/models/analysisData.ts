import { AnalysisConfig } from './analysisConfig'

export class AnalysisData {
  readonly config: AnalysisConfig
  private startTimestamp: number = Date.now()
  private stopTimestamp: number = Date.now()
  readonly timestamps: Array<number> = []
  protected amplitudeSpectrumList: Array<Float32Array> = []

  constructor (analysisConfig: AnalysisConfig = new AnalysisConfig()) {
    this.config = analysisConfig
  }

  public addData (spectrum: Float32Array) {
    if (spectrum.length === 0) {
      this.startTimestamp = Date.now()
    }
    this.stopTimestamp = Date.now()
    this.timestamps.push(this.stopTimestamp - this.startTimestamp)
    this.amplitudeSpectrumList.push(spectrum)
  }

  public clear () {
    this.startTimestamp = Date.now()
    this.stopTimestamp = Date.now()
    this.amplitudeSpectrumList = []
  }

  public getAmplitudeSpectrumList (): number[][] {
    return this.amplitudeSpectrumList.map(spectrum => Array.from(spectrum))
  }

  toString () {
    const duration = ((this.stopTimestamp - this.startTimestamp) / 1000).toFixed(0)
    return `AnalyzeData:\nDuration: ${duration}\tEntries: ${this.timestamps.length}`
  }
}
