import { mount } from '@vue/test-utils'
import 'jest'
import TodoContainer from '@/components/organisms/TodoContainer.vue'
import NewTodo from '@/components/molecules/NewTodo.vue'
import Todo from '@/vo/Todo'

describe('TodoContainer', () => {
  it('renders form', () => {
    const wrapper = mount(TodoContainer)
    expect(wrapper.find(NewTodo).exists()).toBe(true)
  })
  it('add todo', () => {
    const localThis: { [key: string]: Todo[] } = {
      todos: []
    }

    TodoContainer.options.methods.addTodo.call(localThis, 'text')

    expect(localThis.todos[0]).toEqual({
      id: 1,
      text: 'text',
      checked: false
    })
  })
  it('toggle checked', () => {
    const localThis: { [key: string]: Todo[] } = {
      todos: [
        new Todo(1, 'text', true)
      ]
    }

    TodoContainer.options.methods.toggleChecked.call(localThis, 1)

    expect(localThis.todos[0].checked).toBe(false)
  })
})
