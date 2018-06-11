<template>
  <button class="square" :class="{ highlight }" @click="onClick">
    {{ value }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Square",
  data() {
    return {
      marked: false
    }
  },
  props: {
    value: String,
    highlight: {
      type: Boolean,
      default: false
    },
    row: {
      type: Number,
      require: true
    },
    col: {
      type: Number,
      require: true
    }
  },
  methods: {
    onClick: function() {
      if (this.marked) { return }
      this.marked = true
      this.click({ row: this.row, col: this.col })
    },
    ...mapActions([
      'click'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './Square'
</style>
