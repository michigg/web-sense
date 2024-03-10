export enum InputType {
  DUMMY = "DUMMY",
  SURVEY = "SURVEY",
  MIC = "MIC",
  //  Geolocation API https://www.webondevices.com/9-javascript-apis-accessing-device-sensors/#geolocation-api
  GEOLOCATION = "GEOLOCATION",
  ACCELEROMETER = "ACCELEROMETER",
  GYROSCOPE = "GYROSCOPE",
  LINEAR_ACCELERATION = "LINEAR_ACCELERATION",
  ABSOLUTE_ORIENTATION = "ABSOLUTE_ORIENTATION",
  RELATIVE_ORIENTATION = "RELATIVE_ORIENTATION",
  GRAVITY = "GRAVITY",
  MAGNETOMETER = "MAGNETOMETER",
  // Device Light API https://www.webondevices.com/9-javascript-apis-accessing-device-sensors/#device-light-api
  DEVICE_LIGHT = "DEVICE_LIGHT",
  // Battery Manager API https://www.webondevices.com/9-javascript-apis-accessing-device-sensors/#battery-manager-api
  // VueUse https://vueuse.org/core/useBattery/
  BATTERY = "BATTERY",
  // Proximity Events API https://www.webondevices.com/9-javascript-apis-accessing-device-sensors/#proximity-events-api
  PROXIMITY = "PROXIMITY",
  CAMERA = "CAMERA",
  // VueUse https://vueuse.org/core/useNetwork/
  NETWORK = "NETWORK",
  // VueUse https://vueuse.org/core/useDeviceMotion/
  DEVICE_MOTION = "DEVICE_MOTION"
}
