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
  computed: {
    ...mapState({
      squares: state => {
        const b = state.board
        const tmp = [
          b.slice(0, 3),
          b.slice(3, 6),
          b.slice(6)
        ]
        return ((a) => {
          return a[0].map((_, c) => a.map(r => r[c]))
        })(tmp)
      }
    }),
    ...mapGetters([
      'winner'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './index'
</style>
