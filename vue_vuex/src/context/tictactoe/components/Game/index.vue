<template>
  <div class="game">
    <div class="game-board">
      <Board />
    </div>
    <div class="game-info">
      <div class="status">{{ status }}</div>
      <button @click="toggleOrder()">order {{ orderIsAsc ? '▲' : '▼' }}</button>
      <ol>
        <li v-for="(v, i) in moves" :key="'move-' + i">
          <button @click="jumpTo(v.turn)" :class="{ emphasis: (nextTurn - 1) === v.turn }">{{ v.label }}</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Board from '../Board'

export default {
  name: "Game",
  components: {
    Board
  },
  data() {
    return {
      orderIsAsc: true
    }
  },
  computed: {
    status: function() {
      return this.winner ? `Winner: ${this.winner.player}` : `Next player: ${this.nextPlayer}`
    },
    moves: function() {
      const m = this.history.map((step, move) => {
        const label = (move ? `Go to move #${move}` : 'Go to game start') + ` (col: ${step.tap.col}, row: ${step.tap.row})`
        return {
          turn: move,
          label
        }
      })
      return this.orderIsAsc ? m : m.reverse()
    },
    ...mapState([
      'history',
      'nextTurn'
    ]),
    ...mapGetters([
      'nextPlayer',
      'winner'
    ])
  },
  methods: {
    toggleOrder() {
      this.orderIsAsc = !this.orderIsAsc
    },
    ...mapActions([
      'jumpTo'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './index'
</style>
