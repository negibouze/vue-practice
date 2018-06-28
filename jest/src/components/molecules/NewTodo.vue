<template>
  <div>
    <input
      type="text"
      class="new"
      v-model="text"
      @keyup.enter="submit"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'new-todo',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    submit() {
      this.$emit('createTodo', this.text)
    }
  }
})
</script>
