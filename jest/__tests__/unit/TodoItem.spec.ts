import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/molecules/TodoItem.vue'

describe('TodoItem', () => {
  const id = 1
  it('renders text', () => {
    const text = '最初の文字'
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        id,
        text,
        checked: false
      }
    })

    expect(wrapper.find('span').text()).toBe(text)

    const text2 = '二番目の文字'
    wrapper.setProps({ text: text2 })
    expect(wrapper.find('span').text()).toBe(text2)
  })
  it('renders radio', () => {
    const text = 'text1'
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        id,
        text,
        checked: true
      }
    })

    expect(wrapper.find('.radio:checked').exists()).toBe(true)
  })
  it('emit event when I click radio', () => {
    const text = 'text1'
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        id,
        text,
        checked: false
      }
    })

    wrapper.find('.radio').trigger('click')

    expect(wrapper.emitted('toggleChecked')[0][0]).toBe(id)
  })
})
