import { shallowMount, createLocalVue } from '@vue/test-utils'
import 'jest'
import Vuex from 'vuex'
import { Store } from 'vuex'
import Foo from '@/components/atoms/Foo.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Label.vue', () => {
  let title: string
  let store: Store<any>
  beforeEach(() => {
    title = 'default label'
    store = new Vuex.Store({
      state: {
        text: title
      },
      getters: {
        title: (state): string => {
          return state.text
        }
      }
    })
  })
  it('renders state.text into span', () => {
    const wrapper = shallowMount(Foo, { store, localVue })
    const span = wrapper.find('span')
    expect(span.text()).toBe(title)
  })
})
