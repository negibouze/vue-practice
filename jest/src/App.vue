<template>
  <div id="app">
    <div>
      <message-toggle />
      <list :items="['list item 1', 'listen item 2']" />
    </div>
    <div>
      <TodoContainer />
    </div>
  </div>
</template>

<script lang="ts">
import MessageToggle from '@/components/molecules/MessageToggle.vue'
import List from '@/components/atoms/List.vue'
import TodoContainer from '@/components/organisms/TodoContainer.vue'

export default {
  components: {
    MessageToggle,
    List,
    TodoContainer
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  color: #2c3e50
</style>
