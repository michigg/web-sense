// eslint-disable-next-line
// @ts-ignore
import Meyda, { MeydaAnalyzer, MeydaFeaturesObject } from "meyda"
import { AnalysisData } from "../models/analysisData"
import type { MicSensor } from "../../Sensor"
import { AnalysisConfig } from "../models/analysisConfig"
import { SensorError } from "@/modules/inputs/exceptions"

export class MicAnalyzer {
  private analyzer: MeydaAnalyzer | undefined = undefined
  private readonly mic: MicSensor
  readonly analysisConfig: AnalysisConfig
  private store: AnalysisData = new AnalysisData()

  constructor (mic: MicSensor) {
    this.mic = mic
    this.analysisConfig = new AnalysisConfig(
      undefined,
      mic.sampleRate,
      mic.bufferSize
    )
  }

  private async startAnalyzer (inputDevice: MediaDeviceInfo | undefined) {
    console.info("[AudioDBAnalyzer]: Try to start analyzer")
    if (typeof Meyda === "undefined") {
      console.error(
        "[AudioDBAnalyzer]: Meyda could not be found! Have you included it?"
      )
      return
    }
    try {
      // INIT store
      this.store = new AnalysisData(this.analysisConfig)
      await this.mic.activateInputDevice(inputDevice?.deviceId)
      console.log("MIC", this.mic)
      console.info(`[AudioDBAnalyzer]: Sample Rate ${this.mic.sampleRate}`)
      console.info(`[AudioDBAnalyzer]: Buffer Size ${this.mic.bufferSize}`)
      console.info(
        `[AudioDBAnalyzer]: Windowing Function ${this.analysisConfig.windowingFunction}`
      )

      // START Analyze
      this.analyzer = Meyda.createMeydaAnalyzer({
        audioContext: this.mic.audioContext,
        source: this.mic.getSourceAudioNode(),
        sampleRate: this.mic.sampleRate,
        bufferSize: this.mic.bufferSize,
        windowingFunction: this.analysisConfig.windowingFunction,
        featureExtractors: ["amplitudeSpectrum"],
        callback: (features: MeydaFeaturesObject) => {
          this.store.addData(features.amplitudeSpectrum)
        }
      })
      this.analyzer.start()
      console.info("[AudioDBAnalyzer]: Analyzer started")
    } catch (e) {
      console.error("[AudioDBAnalyzer]: Analyzer start failed", e)
      throw new SensorError(
        "Aufnahme konnte nicht gestartet werden. Bitte versuchen Sie es erneut.",
        e as Error
      )
    }
  }

  private async stopAnalyzer () {
    console.info("[AudioDBAnalyzer]: Try to stop analyzer")
    if (!this.analyzer) {
      console.warn("[AudioDBAnalyzer]: No analyzer to stop found")
      return
    }
    try {
      this.analyzer.stop()
      await this.mic.deactivateInputDevices()
      console.info("[AudioDBAnalyzer]: ANALYZER STOP")
    } catch (e) {
      console.error("[AudioDBAnalyzer]: Analyzer stop failed", e)
      throw new SensorError(
        "Aufnahme konnte nicht gestoppt werden. Bitte versuchen Sie es erneut.",
        e as Error
      )
    }
  }

  async analyze (
    durationSecondsOverride = 0,
    inputDevice: MediaDeviceInfo | undefined = undefined
  ): Promise<AnalysisData> {
    await this.startAnalyzer(inputDevice)
    const duration =
      durationSecondsOverride || this.analysisConfig.durationSeconds
    this.analysisConfig.durationSeconds = duration
    const onAnalyzeStop = new Promise<void>((resolve) => {
      setTimeout(async () => {
        await this.stopAnalyzer()
        resolve()
      }, duration * 1000)
    })
    await onAnalyzeStop
    return this.store
  }
}
