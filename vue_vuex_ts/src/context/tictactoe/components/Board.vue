<template>
  <div>
    <div class="board">
      <div class="board-row" v-for="(cols, i) in squares" :key="'row-' + i">
        <Square v-for="(val, j) in cols"
          :key="'square-' + i + '-' + j"
          :row="i"
          :col="j"
          :value="val"
          :marked="!!val"
          :highlight="winningLine.includes((i * 3) + j)"
        />
      </div>
    </div>
    {{ squares }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Winner from '@/vo/winner'
import Square from './Square.vue'

export default Vue.extend({
  name: "Board",
  components: {
    Square 
  },
  data() {
    return {
      winningLine: []
    }
  },
  computed: {
    squares(): string[][] {
        const b = this.$store.state.board
        return [
          b.slice(0, 3),
          b.slice(3, 6),
          b.slice(6)
        ]
    },
    winner(): Winner | null {
      return this.$store.getters.winner
    }
  },
  watch: {
    winner: function(newValue): void {
      this.winningLine = newValue ? newValue.line : []
    }
  }
})
</script>

<style lang="stylus" scoped>
.board-row:after
  clear: both
  content: ""
  display: table
</style>
