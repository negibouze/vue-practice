<template>
  <button class="square" :class="{ highlight }" @click="onClick">
    {{ value }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
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
    onClick: function(): void {
      if (!!this.winner || this.marked) { return }
      this.click({ row: this.row, col: this.col, value: this.nextPlayer })
    },
    ...mapActions([
      'click'
    ])
  }
})
</script>

<style lang="stylus" scoped>
.square
  background: #fff
  border: 1px solid #999
  float: left
  font-size: 24px
  font-weight: bold
  line-height: 34px
  height: 34px
  margin-right: -1px
  margin-top: -1px
  padding: 0
  text-align: center
  width: 34px

.square:focus
  outline: none

.highlight
  background-color: #ccc
</style>
