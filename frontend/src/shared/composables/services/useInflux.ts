import { BaseError } from "@/shared/exceptions"
import { InfluxDB, Point } from "@influxdata/influxdb-client-browser"

export interface InfluxDBConvertable {
  toInfluxPoints (): Array<Point>;
}

export function useInflux (): {
  influxWrite: (data: InfluxDBConvertable) => Promise<void>;
} {
  const url = import.meta.env.VITE_INFLUX_ENDPOINT
  if (!url) {
    // TODO: fix
    throw new BaseError("")
  }
  const org = import.meta.env.VITE_INFLUX_ORG
  if (!org) {
    // TODO: fix
    throw new BaseError("")
  }
  const bucket = import.meta.env.VITE_INFLUX_BUCKET
  if (!bucket) {
    // TODO: fix
    throw new BaseError("")
  }
  const token = import.meta.env.VITE_INFLUX_TOKEN
  if (!token) {
    // TODO: fix
    throw new BaseError("")
  }

  const influxWrite = async (data: InfluxDBConvertable) => {
    const client = new InfluxDB({
      url,
      token
    })
    const writeApi = client.getWriteApi(org, bucket, "ms")
    for (const point of data.toInfluxPoints()) {
      writeApi.writePoint(point)
    }
    await writeApi.close()
  }

  return {
    influxWrite
  }
}
