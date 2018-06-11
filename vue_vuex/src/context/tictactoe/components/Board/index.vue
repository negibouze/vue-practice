<template>
  <div>
    <div class="board">
      <div class="board-row" v-for="(v, i) in edgeLength" :key="'row-' + i">
        <Square v-for="(v, j) in edgeLength"
          :key="'square-' + ((edgeLength * i) + j)"
          :value="squares[((edgeLength * i) + j)]"
          :row="i"
          :col="j"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Square from '../Square'

export default {
  name: "Board",
  components: {
    Square 
  },
  props: {
    squares: Array
  },
  computed: {
    edgeLength: function() {
      return Math.sqrt(this.squares.length)
    },
    ...mapState('square', [
      
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './Board'
</style>
