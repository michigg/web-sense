/**
 * @author Michael Götz
 */

import {BaseError} from "@/shared/exceptions"
import {SensorError} from "@/modules/inputs/exceptions"
import {InputType} from "@/modules/inputs/models/inputType"
import {AbstractSensor} from "@/modules/inputs/models/sensors/abstractSensor"

export interface GeolocationOptions {
  maximumAge?: number,
  timeout?: number,
  enableHighAccuracy?: boolean
}

export class GeolocationSensor extends AbstractSensor<Geolocation, GeolocationPosition, GeolocationOptions> {
  private watchID = -1

  constructor() {
    super(
      InputType.GEOLOCATION,
      'bi-geo',
      'geolocation',
      ['geolocation']
    )
  }

  async getLocationFromGeolocationAPI(
    options: PositionOptions
  ): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            timestamp: position.timestamp,
            coords: {
              accuracy: position.coords.accuracy,
              altitude: position.coords.altitude,
              altitudeAccuracy: position.coords.altitudeAccuracy,
              heading: position.coords.heading,
              speed: position.coords.heading,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          })
        },
        (error) => {
          console.log(error)
          reject(error)
        },
        options
      )
    })
  }

  async getLocation(): Promise<GeolocationPosition> {
    try {
      return await this.getLocationFromGeolocationAPI({
        maximumAge: 5000,
        timeout: 5000,
        enableHighAccuracy: true
      })
    } catch (e) {
      console.error('getLocation', e)
      return await this.getLocationFromGeolocationAPI({
        maximumAge: 5000,
        timeout: 1000,
        enableHighAccuracy: false
      })
    }
  }

  _getAvailability(): Promise<boolean> {
    return Promise.resolve("geolocation" in navigator)
  }

  async getPermission(): Promise<PermissionState> {
    try {
      // Fix for old browsers
      await this.getLocation()
      return "granted" as PermissionState
    } catch (e) {
      return "denied" as PermissionState
    }
    // In future this should do the trick See: https://caniuse.com/?search=Permissions%20API
    // const permissionStatus = await navigator.permissions.query({ name: 'geolocation' })
    // return permissionStatus.state
  }

  _startSensor(options?: GeolocationOptions | undefined): Promise<void> {
    this.sensor.value = navigator.geolocation
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        this.currentSensorValue.value = position
      },
      (positionError) => {
        this.error.value = this._getErrorFromGeolocationError(positionError)
      },
      options
    )
    return Promise.resolve(undefined)
  }

  _stopSensor(): Promise<void> {
    if (this.watchID != null) {
      try {
        navigator.geolocation.clearWatch(this.watchID)
      } catch (e: unknown) {
        console.error('Cannot stop location watcher', e)
        if (e instanceof Error) {
          this.error.value = new BaseError("Cannot stop location watcher", e)
        }
      }
    }
    return Promise.resolve()
  }

  _getErrorFromGeolocationError(error: GeolocationPositionError) {
    const {code} = error
    switch (code) {
      case GeolocationPositionError.TIMEOUT:
        // Handle timeout.
        return new SensorError(
          "Aktuelle Position konnte nicht rechtzeitig ermittelt werden.",
          new BaseError(error.message)
        )
      case GeolocationPositionError.PERMISSION_DENIED:
        // User denied the request.
        return new SensorError(
          "Aktuelle Position konnte aufgrund fehlender Berechtigung nicht ermittelt werden. Bitte prüfen Sie, ob sie die Positionsermittlung durch ihr Gerät oder den Browser verbieten und erlauben Sie diese.",
          new BaseError(error.message)
        )
      case GeolocationPositionError.POSITION_UNAVAILABLE:
        // Position not available.
        return new SensorError(
          "Aktuelle Position konnte nicht ermittelt werden.",
          new BaseError(error.message)
        )
      default:
        new SensorError(
          `Aktuelle Position konnte nicht ermittelt werden. Ein unbekannter Fehler ist aufgetreten:\n ${error.message}.`,
          new BaseError(error.message)
        )
    }
  }
}
