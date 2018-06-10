<template>
  <button class="square" :class="{ highlight }" @click="onClick">
    {{ value }}
  </button>
</template>

<script>
import { mapAction } from 'vuex'

export default {
  name: "Square",
  props: {
    value: String,
    highlight: {
      type: Boolean,
      default: false
    },
    position: {
      type: Object,
      require: true
    }
  },
  methods: {
    onClick: function() {
      this.click(position)
    },
    ...mapAction('square', [
      'click'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './Square'
</style>
