import { mount } from '@vue/test-utils'
import 'jest'
import MessageToggle from '@/components/molecules/MessageToggle.vue'
import Message from '@/components/atoms/Message.vue'

describe('MessageToggle', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = mount(MessageToggle)
    const button = wrapper.find('#toggle-message')
    button.trigger('click')
    const MessageComponent = wrapper.find(Message)
    expect(MessageComponent.props()).toEqual({msg: 'message'})
    button.trigger('click')
    expect(MessageComponent.props()).toEqual({msg: 'toggled message'})
  })
})
