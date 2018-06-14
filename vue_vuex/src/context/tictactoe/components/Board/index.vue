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

<script>
import { mapState, mapGetters } from 'vuex'
import Square from '../Square'

export default {
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
    ...mapState({
      squares: state => {
        const b = state.board
        return [
          b.slice(0, 3),
          b.slice(3, 6),
          b.slice(6)
        ]
      }
    }),
    ...mapGetters([
      'winner'
    ])
  },
  watch: {
    winner: function(newValue) {
      this.winningLine = newValue ? newValue.line : []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './index'
</style>
