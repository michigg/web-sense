import axios from 'axios'

export interface TBPoint {
  ts: number,
  values: { [key: string]: number | string | boolean }
}

export interface ThingsboardConvertable {
  toTBTelemetries (): Array<TBPoint>
}

export function useThingsBoard (): {
  sendTelemetry: (data: ThingsboardConvertable) => Promise<void>
  } {
  const baseUrl = process.env.VUE_APP_THINGSBOARD_ENDPOINT
  const key = process.env.VUE_APP_THINGSBOARD_AUTHORIZATION_TOKEN

  const sendTelemetry = async (data: ThingsboardConvertable) => {
    const url = `${baseUrl}/api/v1/${key}/telemetry`

    for (const telemetry of data.toTBTelemetries()) {
      await axios.post(url, telemetry)
    }
  }

  return {
    sendTelemetry
  }
}
