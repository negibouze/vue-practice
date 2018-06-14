<template>
  <div>
    <div class="board">
      <div class="board-row" v-for="(v, i) in edgeLength" :key="'row-' + i">
        <Square v-for="(v, j) in edgeLength"
          :key="'square-' + ((edgeLength * i) + j)"
          :value="squares[((edgeLength * i) + j)]"
          :highlight="winningLine.includes((edgeLength * i) + j)"
          :onClick="onClick.bind(this, (edgeLength * i) + j)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Square from './Square.vue'

export default {
  name: "Board",
  components: {
    Square 
  },
  props: {
    squares: Array,
    winningLine: {
      type: Array,
      default: () => { return [] }
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  computed: {
    edgeLength: function() {
      return Math.sqrt(this.squares.length)
    }
  }
}
</script>

<style lang="stylus" scoped>
.board-row:after
  clear: both
  content: ""
  display: table
</style>
