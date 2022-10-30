import { LatLng } from "leaflet"
import type { TaskStepResult } from "@/modules/tasks/models/result"

export class GeolocationData {
  lat: number
  lng: number
  accuracy?: number
  alt?: number

  constructor (
    latitude: number,
    longitude: number,
    accuracy?: number,
    altitude?: number
  ) {
    this.lat = latitude
    this.lng = longitude
    this.accuracy = accuracy
    this.alt = altitude
  }

  clone (): GeolocationData {
    return new GeolocationData(this.lat, this.lng, this.accuracy, this.alt)
  }

  toLatLng (): LatLng {
    return new LatLng(this.lat, this.lng, this.alt)
  }

  static fromTaskStepResult(stepResult: TaskStepResult): GeolocationData | undefined {
    const latitude = stepResult.results[0].metas.get("latitude") as number
    const longitude = stepResult.results[0].metas.get("longitude") as number
    const accuracy = stepResult.results[0].metas.get("accuracy") as number
    if (latitude == null || longitude == null) {
      return
    }
    return new GeolocationData(latitude, longitude, accuracy)
  }

  static fromIDB (idbGeolocationData?: GeolocationData): GeolocationData | undefined {
    if (!idbGeolocationData) return
    return new GeolocationData(
      idbGeolocationData.lat,
      idbGeolocationData.lng,
      idbGeolocationData.accuracy,
      idbGeolocationData.alt
    )
  }
}
