import { GeolocationSensor } from './Sensor'

describe('GeolocationSensor', () => {
  let sensor: GeolocationSensor

  beforeEach(() => {
    Object.defineProperty(window.navigator, 'geolocation', {
      value: {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      },
      configurable: true
    })

    sensor = new GeolocationSensor()
  })

  it('returns true if sensors is available', async () => {
    expect(sensor.isAvailable).toBe(false)
    await sensor.checkAvailability()
    expect(sensor.isAvailable).toBe(true)
  })

  it('returns false if sensors is available', async () => {
    Object.defineProperty(window, 'navigator', {
      value: {},
      configurable: true
    })

    await sensor.checkAvailability()
    expect(sensor.isAvailable).toBe(false)
  })
})
