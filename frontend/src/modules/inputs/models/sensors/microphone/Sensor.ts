/**
 * @author Michael Götz
 */

// https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
import { MediaDeviceType } from './MediaDeviceType'
import { Sensor } from '@/modules/inputs/models/Sensor'
import { SensorError } from '@/modules/inputs/exceptions'
import { InputType } from '@/modules/inputs/models/inputType'

export class MicSensor implements Sensor {
  readonly key: InputType = InputType.MIC
  readonly availableIconKey: string = 'bi-mic'
  readonly unavailableIconKey: string = 'bi-mic'
  isAvailable = false
  isActive = false
  isCalibrated = false
  deviceId = ''

  audioContext: AudioContext | undefined
  sourceAudioNode: MediaStreamAudioSourceNode | undefined = undefined
  readonly sampleRate: number = 48000 // 44100
  readonly bufferSize: number = 1024

  constructor (
    audioContext: AudioContext | undefined = undefined
  ) {
    this.audioContext = audioContext
  }

  async checkAvailability (): Promise<void> {
    const audioInputDevices: Array<MediaDeviceInfo> = await this.availableDevices()
    this.isAvailable = audioInputDevices.length > 0
    return Promise.resolve()
  }

  async availableDevices (): Promise<Array<MediaDeviceInfo>> {
    if (!('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices)) {
      return Promise.resolve([])
    }
    const mediaDevices: Array<MediaDeviceInfo> = await navigator.mediaDevices.enumerateDevices()
    const audioInputDevices: Array<MediaDeviceInfo> = mediaDevices.filter((device: MediaDeviceInfo) => device.kind === MediaDeviceType.AUDIO)
    return Promise.resolve(audioInputDevices)
  }

  async getPermission (): Promise<PermissionState> {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
      // return await navigator.permissions.query({ name: 'microphone' })
      return Promise.resolve('granted')
    } catch (e) {
      return Promise.resolve('denied')
    }
  }

  async activateInputDevice (deviceId = ''): Promise<MediaStreamAudioSourceNode> {
    if (!this.audioContext) {
      // eslint-disable-next-line
      // @ts-ignore
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      this.audioContext = new AudioContext({
        latencyHint: 'interactive',
        sampleRate: this.sampleRate
      })
    }
    if (this.sourceAudioNode) {
      await this.deactivateInputDevices()
    }
    try {
      const audio: MediaTrackConstraints = {
        // TODO: both properties not supported in firefox
        sampleRate: this.sampleRate,
        sampleSize: this.bufferSize
      }
      if (deviceId || this.deviceId) {
        audio.deviceId = deviceId || this.deviceId
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio })
      console.info(`[MIC]: Sample Rate ${this.sampleRate}`)
      console.info(`[MIC]: Buffer Size ${this.bufferSize}`)
      this.sourceAudioNode = this.audioContext.createMediaStreamSource(stream)
      return this.sourceAudioNode
    } catch (e) {
      throw new SensorError(`Mikrofon konnte nicht gestartet werden.\n Grund: ${e}`)
    }
  }

  async deactivateInputDevices (): Promise<void> {
    this.sourceAudioNode?.mediaStream.getAudioTracks().forEach(track => track.stop())
  }

  clone (): Sensor {
    return new MicSensor(this.audioContext)
  }
}
