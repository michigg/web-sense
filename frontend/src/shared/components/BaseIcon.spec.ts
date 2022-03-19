import { mount, VueWrapper } from '@vue/test-utils'
import Icon from '@/shared/components/BaseIcon.vue'

describe('Icon', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(Icon, {
      props: {
        iconKey: 'testIconClass'
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders with aria-hidden=true attribute', async () => {
    const icon = wrapper.find('[data-test="icon"]')
    expect(icon.attributes('aria-hidden')).toBe('true')
  })

  it('renders with bootstrap-icon default class', async () => {
    const icon = wrapper.find('[data-test="icon"]')
    expect(icon.classes()).toContain('bi')
  })

  it('renders with given icon class', async () => {
    const icon = wrapper.find('[data-test="icon"]')
    expect(icon.classes()).toContain('testIconClass')
  })
})
