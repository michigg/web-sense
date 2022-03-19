import { InfluxDB, Point } from '@influxdata/influxdb-client-browser'

export interface InfluxDBConvertable {
  toInfluxPoints (): Array<Point>
}

export function useInflux (): {
  influxWrite: (data: InfluxDBConvertable) => Promise<void>
  } {
  const url = process.env.VUE_APP_INFLUX_ENDPOINT
  const org = process.env.VUE_APP_INFLUX_ORG
  const bucket = process.env.VUE_APP_INFLUX_BUCKET
  const token = process.env.VUE_APP_INFLUX_TOKEN

  const influxWrite = async (data: InfluxDBConvertable) => {
    const client = new InfluxDB({
      url,
      token
    })
    const writeApi = client.getWriteApi(org, bucket, 'ms')
    for (const point of data.toInfluxPoints()) {
      writeApi.writePoint(point)
    }
    await writeApi.close()
  }

  return {
    influxWrite
  }
}
