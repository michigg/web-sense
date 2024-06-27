/**
 * @author Michael Götz
 */

import { BaseError } from "@/shared/exceptions"
import type { Sensor } from "@/modules/inputs/models/Sensor"
import { SensorError } from "@/modules/inputs/exceptions"
import { InputType } from "@/modules/inputs/models/inputType"

export class GeolocationSensor implements Sensor {
  static META_KEY = "geolocation"
  readonly key: InputType = InputType.GEOLOCATION
  readonly sensorPath = 'geolocation'
  isAvailable: boolean
  isActive: boolean
  isCalibrated: boolean
  readonly availableIconKey: string = "bi-geo"
  readonly unavailableIconKey: string = "bi-geo"
  private watchID = -1
  private position: GeolocationPosition | undefined = undefined

  constructor (
    isAvailable = false,
    isActive = false,
    isCalibrated = false,
    watchID = -1,
    position: GeolocationPosition | undefined = undefined
  ) {
    this.isAvailable = isAvailable
    this.isActive = isActive
    this.isCalibrated = isCalibrated
    this.watchID = watchID
    this.position = position
  }

  async checkAvailability (): Promise<void> {
    this.isAvailable = "geolocation" in navigator
    return Promise.resolve()
  }

  async getPermission (): Promise<PermissionState> {
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

  async getLocationFromGeolocationAPI (
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
          const { code } = error
          switch (code) {
            case GeolocationPositionError.TIMEOUT:
              // Handle timeout.
              reject(
                new SensorError(
                  "Aktuelle Position konnte nicht rechtzeitig ermittelt werden.",
                  new BaseError(error.message)
                )
              )
              return
            case GeolocationPositionError.PERMISSION_DENIED:
              // User denied the request.
              reject(
                new SensorError(
                  "Aktuelle Position konnte aufgrund fehlender Berechtigung nicht ermittelt werden. Bitte prüfen Sie, ob sie die Positionsermittlung durch ihr Gerät oder den Browser verbieten und erlauben Sie diese.",
                  new BaseError(error.message)
                )
              )
              return
            case GeolocationPositionError.POSITION_UNAVAILABLE:
              // Position not available.
              reject(
                new SensorError(
                  "Aktuelle Position konnte nicht ermittelt werden.",
                  new BaseError(error.message)
                )
              )
              return
          }
          reject(
            new SensorError(
              `Aktuelle Position konnte nicht ermittelt werden. Ein unbekannter Fehler ist aufgetreten:\n ${error.message}.`,
              new BaseError(error.message)
            )
          )
        },
        options
      )
    })
  }

  async getLocation (): Promise<GeolocationPosition> {
    try {
      return await this.getLocationFromGeolocationAPI({
        maximumAge: 5000,
        timeout: 5000,
        enableHighAccuracy: true
      })
    } catch (e) {
      return await this.getLocationFromGeolocationAPI({
        maximumAge: 5000,
        timeout: 1000,
        enableHighAccuracy: false
      })
    }
  }

  async start (): Promise<void> {
    try {
      await this.getPermission()
      this.watchID = navigator.geolocation.watchPosition((position) => {
        this.position = position
      })
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new BaseError("Cannot start location watcher", e)
      }
    }
  }

  async stop (): Promise<void> {
    try {
      navigator.geolocation.clearWatch(this.watchID)
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new BaseError("Cannot stop location watcher", e)
      }
    }
  }

  clone (): Sensor {
    return new GeolocationSensor(
      this.isAvailable,
      this.isActive,
      this.isCalibrated,
      this.watchID,
      this.position
    )
  }
}
