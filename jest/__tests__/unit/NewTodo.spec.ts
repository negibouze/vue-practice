import { shallowMount } from '@vue/test-utils'
import 'jest'
import NewTodo from '@/components/molecules/NewTodo.vue'

describe('NewTodo', () => {
  it('renders input tag', () => {
    const wrapper = shallowMount(NewTodo)
    expect(wrapper.find('input.new').exists()).toBe(true)
  })
  it('emit a new tag', () => {
    const text = 'text'
    const wrapper = shallowMount(NewTodo)

    wrapper.setData({text})
    wrapper.find('.new').trigger('keyup.enter')

    expect(wrapper.emitted('createTodo')[0][0]).toBe(text)
  })
})
