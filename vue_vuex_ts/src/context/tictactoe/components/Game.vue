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

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import History from '@/vo/history'
import Winner from '@/vo/winner'
import Board from './Board.vue'

interface Move {
  turn: number,
  label: string
}

export default Vue.extend({
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
    status(): string {
      return this.winner ? `Winner: ${this.winner.player}` : `Next player: ${this.nextPlayer}`
    },
    moves(): Move[] {
      const m = this.history.map((step: History, move: number) => {
        const label = (move ? `Go to move #${move}` : 'Go to game start') + ` (col: ${step.tap.col}, row: ${step.tap.row})`
        return {
          turn: move,
          label
        }
      })
      return this.orderIsAsc ? m : m.reverse()
    },
    history(): History[] {
      return this.$store.state.history
    },
    nextTurn(): number {
      return this.$store.state.nextTurn
    },
    nextPlayer(): string {
      return this.$store.getters.nextPlayer
    },
    winner(): Winner | null {
      return this.$store.getters.winner
    }
  },
  methods: {
    toggleOrder(): void {
      this.orderIsAsc = !this.orderIsAsc
    },
    ...mapActions([
      'jumpTo'
    ])
  }
})
</script>

<style lang="stylus" scoped>
ol, ul
  padding-left: 30px

.game
  display: flex
  flex-direction: row

.game-info
  margin-left: 20px

.status
  margin-bottom: 10px

.emphasis
  font-weight: bold
</style>
