// eslint-disable-next-line
// @ts-ignore
import { MeydaAnalyzerOptions } from 'meyda'
import {
  AudioCalculationsFrequency
} from '@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsFrequency'

export class AnalysisConfig implements MeydaAnalyzerOptions {
  durationSeconds: number
  // https://www.w3.org/TR/webaudio/#ScriptProcessorNode
  // Lower numbers for bufferSize will result in a lower (better) latency. Higher numbers will be necessary to avoid audio breakup and glitches
  public readonly bufferSize: number // 256, 512, 1024, 2048, 4096, 8192, 16384
  // https://www.w3.org/TR/webaudio/#dom-baseaudiocontext-createbuffer
  // Describes the sample-rate of the linear PCM audio data in the buffer in sample-frames per second. An implementation MUST support sample rates in at least the range 8000 to 96000.
  // https://meyda.js.org/reference/interfaces/Meyda.default.html#sampleRate
  public readonly sampleRate: number // 8000 - 96000
  public readonly numberOfInputChannels: number
  // https://meyda.js.org/reference/interfaces/Meyda.default.html#windowingFunction
  public readonly windowingFunction: string
  public readonly frequencies: Array<number>
  public readonly lowestPerceptibleFrequency: number
  public readonly highestPerceptibleFrequency: number

  constructor (
    durationSeconds = 5,
    sampleRate = 44100,
    bufferSize = 8192,
    numberOfInputChannels = 1,
    windowingFunction = 'hanning',
    lowestPerceptibleFrequency = 20, // Lowest Hz human can hear
    highestPerceptibleFrequency = 20000, // Highest Hz human can hear
    frequencies: Array<number> = AudioCalculationsFrequency.frequenciesUsingSampleRateBufferSize(sampleRate, bufferSize)
  ) {
    this.durationSeconds = durationSeconds
    this.sampleRate = sampleRate
    this.bufferSize = bufferSize
    this.numberOfInputChannels = numberOfInputChannels
    this.windowingFunction = windowingFunction
    this.lowestPerceptibleFrequency = lowestPerceptibleFrequency
    this.highestPerceptibleFrequency = highestPerceptibleFrequency
    this.frequencies = frequencies
  }

  clone (): AnalysisConfig {
    return new AnalysisConfig(
      this.durationSeconds,
      this.sampleRate,
      this.bufferSize,
      this.numberOfInputChannels,
      this.windowingFunction,
      this.lowestPerceptibleFrequency,
      this.highestPerceptibleFrequency,
      this.frequencies
    )
  }
}
