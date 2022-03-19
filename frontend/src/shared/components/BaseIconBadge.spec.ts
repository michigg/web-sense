import { mount, VueWrapper } from '@vue/test-utils'
import IconBadge from '@/shared/components/BaseIconBadge.vue'

describe('IconBage', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(IconBadge, {
      props: {
        iconKey: 'testIconClass'
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders with given icon class', async () => {
    const icon = wrapper.find('[data-test="badge"] [data-test="icon"]')
    expect(icon.classes()).toContain('testIconClass')
  })
})
