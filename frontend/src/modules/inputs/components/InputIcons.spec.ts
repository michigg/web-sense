import { mount, VueWrapper } from '@vue/test-utils'
import InputIcons from '@/modules/inputs/components/InputIcons.vue'
import { key } from '@/store'
import { Sensor } from '@/modules/inputs/models/Sensor'
import { SurveySensor } from '@/modules/inputs/models/sensors/survey/Sensor'
import { MicSensor } from '@/modules/inputs/models/sensors/microphone/Sensor'
import { GeolocationSensor } from '@/modules/inputs/models/sensors/geolocation/Sensor'
import { createStore } from 'vuex'
import { InputType } from '@/modules/inputs/models/inputType'

describe('SensorIcons', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    const mic = new MicSensor()
    mic.isAvailable = true

    const store = createStore({
      getters: {
        'sensors/getSensorsFromKeys': () => () => {
          return new Map<InputType, Sensor>([
            [InputType.SURVEY, new SurveySensor()],
            [InputType.MIC, mic],
            [InputType.GEOLOCATION, new GeolocationSensor()]
          ])
        }
      }
    })
    wrapper = mount(InputIcons, {
      props: {
        inputTypes: [
          InputType.MIC,
          InputType.SURVEY,
          InputType.DUMMY
        ]
      },
      global: {
        provide: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          [key]: store
        }
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the icons', async () => {
    const icons = wrapper.findAll('.inputs-icon')
    expect(icons.length).toBe(3)
  })

  it('renders available sensors as success', async () => {
    const icons = wrapper.findAll('.inputs-icon.text-success')
    expect(icons.length).toBe(2)
  })

  it('renders available sensors as fail', async () => {
    const icons = wrapper.findAll('.inputs-icon.text-danger')
    expect(icons.length).toBe(1)
  })
})
