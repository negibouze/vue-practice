<template>
  <div>
    <NewTodo
      @createTodo="addTodo">
    </NewTodo>
    <TodoItem
      v-for="todo in todos"
      :id="todo.id"
      :key="todo.id"
      :text="todo.text"
      :checked="todo.checked"
      @toggleChecked="toggleChecked"
    >
    </TodoItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NewTodo from '@/components/molecules/NewTodo.vue'
import TodoItem from '@/components/molecules/TodoItem.vue'
import Todo from '@/vo/Todo'

export default Vue.extend({
  name: 'todo-container',
  components: {
    NewTodo,
    TodoItem
  },
  data() {
    return {
      todos: [] as Todo[]
    }
  },
  methods: {
    addTodo(text: string) {
      this.todos.push(new Todo(this.todos.length + 1, text, false))
    },
    toggleChecked(id: number) {
      const obj = this.todos.find(x => x.id === id)
      if (!obj) {
        return
      }
      const todo = obj as Todo
      todo.checked = !todo.checked
    }
  }
})
</script>
