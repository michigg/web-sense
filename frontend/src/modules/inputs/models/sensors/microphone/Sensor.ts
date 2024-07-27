/**
 * @author Michael Götz
 */

// https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
import {MediaDeviceType} from "./MediaDeviceType"
import {SensorError} from "@/modules/inputs/exceptions"
import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"

export interface MicSensorOptions {
  deviceId: string,
}

export class MicSensor extends AbstractSensor<AudioContext, MediaStreamAudioSourceNode, MicSensorOptions> {
  audioContext: AudioContext | undefined = undefined
  sourceAudioNode: MediaStreamAudioSourceNode | undefined = undefined
  readonly sampleRate: number = 48000 // 44100
  readonly bufferSize: number = 1024

  constructor() {
    super(
      InputType.MIC,
      'bi-mic',
      'microphone',
      ['microphone'] as unknown as PermissionName[]
    )
  }

  async availableDevices(): Promise<Array<MediaDeviceInfo>> {
    if (
      !("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices)
    ) {
      return Promise.resolve([])
    }
    const mediaDevices: Array<MediaDeviceInfo> =
      await navigator.mediaDevices.enumerateDevices()
    const audioInputDevices: Array<MediaDeviceInfo> = mediaDevices.filter(
      (device: MediaDeviceInfo) => device.kind === MediaDeviceType.AUDIO
    )
    return Promise.resolve(audioInputDevices)
  }

  async queryPermissions(): Promise<PermissionState> {
    try {
      await navigator.mediaDevices.getUserMedia({audio: true})
      // return await navigator.permissions.query({ name: 'microphone' })
      return Promise.resolve("granted")
    } catch (e) {
      return Promise.resolve("denied")
    }
  }

  async activateInputDevice(
    deviceId = ""
  ): Promise<MediaStreamAudioSourceNode> {
    await this._startSensor({deviceId})
    const mediaStreamAudioSourceNode =  this.currentSensorValue.value
    if (!mediaStreamAudioSourceNode) {
      throw new Error('Microphone konnte nicht gestarted werden')
    }
    return mediaStreamAudioSourceNode
  }

  getSourceAudioNode() {
    return this.currentSensorValue.value
  }

  async deactivateInputDevices(): Promise<void> {
    await this._stopSensor()
  }

  async _getAvailability(): Promise<boolean> {
    const audioInputDevices: Array<MediaDeviceInfo> = await this.availableDevices()
    return Promise.resolve(audioInputDevices.length > 0)
  }

  async _startSensor({deviceId}: MicSensorOptions): Promise<void> {
    if (!this.audioContext) {
      // eslint-disable-next-line
      // @ts-ignore
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      this.audioContext = new AudioContext({
        latencyHint: "interactive",
        sampleRate: this.sampleRate
      })
    }
    if (this.currentSensorValue.value) {
      await this._stopSensor()
    }
    try {
      const audio: MediaTrackConstraints = {
        // TODO: both properties not supported in firefox
        deviceId,
        sampleRate: this.sampleRate,
        sampleSize: this.bufferSize
      }
      const stream = await navigator.mediaDevices.getUserMedia({audio})
      console.info(`[MIC]: Sample Rate ${this.sampleRate}`)
      console.info(`[MIC]: Buffer Size ${this.bufferSize}`)
      // Source Audio Node
      this.currentSensorValue.value = this.audioContext.createMediaStreamSource(stream)
    } catch (e) {
      throw new SensorError(
        `Mikrofon konnte nicht gestartet werden.\n Grund: ${e}`
      )
    }
    return Promise.resolve()
  }

  _stopSensor(): Promise<void> {
    // Source Audio Node
    this.currentSensorValue.value?.mediaStream
      .getAudioTracks()
      .forEach((track) => track.stop())
    return Promise.resolve()
  }
}
