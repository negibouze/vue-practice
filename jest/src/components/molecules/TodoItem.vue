<template>
  <div>
    <input
      type="radio"
      class="radio"
      :checked="checked"
      @click="toggleChecked"
    >
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'todo-item',
  props: {
    id: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleChecked() {
      this.$emit("toggleChecked", this.id)
    }
  }
})
</script>
