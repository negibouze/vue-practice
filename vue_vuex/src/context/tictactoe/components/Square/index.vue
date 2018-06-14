<template>
  <button class="square" :class="{ highlight }" @click="onClick">
    {{ value }}
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Square",
  props: {
    value: String,
    marked: Boolean,
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
  computed: {
    ...mapGetters([
      'nextPlayer',
      'winner'
    ])
  },
  methods: {
    onClick: function() {
      if (!!this.winner || this.marked) { return }
      this.click({ row: this.row, col: this.col, value: this.nextPlayer })
    },
    ...mapActions([
      'click'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './index'
</style>
