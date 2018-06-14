<template>
  <div class="game">
    <div class="game-board">
      <Board
        :squares="squares"
        :winningLine="winner ? winner.line : []"
        :onClick="handleClick"
      />
    </div>
    <div class="game-info">
      <div class="status">{{ status }}</div>
      <button @click="toggleOrder()">order {{ orderIsAsc ? '▲' : '▼' }}</button>
      <ol>
        <li v-for="v in moves" :key="'move-' + v.turn">
          <button @click="jumpTo(v.turn)" :class="{ emphasis: current === v.turn }">{{ v.desc }}</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Board from './Board.vue'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        name: squares[a],
        line: [a, b, c]
      }
    }
  }
  return null
}

export default {
  name: "Game",
  components: {
    Board
  },
  data: function() {
    return {
      history: [{
        squares: Array(9).fill(null),
        tap: {
          col: 0,
          row: 0
        }
      }],
      current: 0,
      winner: null,
      xIsNext: true,
      orderIsAsc: true
    }
  },
  computed: {
    squares: function() {
      return this.history[this.current].squares
    },
    edgeLength: function() {
      return Math.sqrt(this.squares.length)
    },
    player: function() {
      return this.xIsNext ? 'X' : 'O'
    },
    status: function() {
      if (this.winner) { return `Winner: ${this.winner.name}` }
      return this.squares.includes(null) ? `Next player: ${this.player}` : 'The game is a draw.'
    },
    moves: function() {
      const m = this.history.map((step, move) => {
        const desc = (move ? `Go to move #${move}` : 'Go to game start') + ` (col: ${step.tap.col}, row: ${step.tap.row})`
        return {
          turn: move,
          desc
        }
      })
      return this.orderIsAsc ? m : m.reverse()
    }
  },
  methods: {
    handleClick: function(i) {
      const squares = this.squares.slice()
      if (this.winner || this.squares[i]) {
        return;
      }
      squares[i] = this.player
      const tap = ((i) => {
        const v = i === 0 ? [1, 1] : [(i % this.edgeLength) + 1, parseInt(i / this.edgeLength) + 1]
        return { col: v[0], row: v[1] }
      })(i);
      this.history = this.history.slice(0, (this.current + 1)).concat([{
        squares,
        tap
      }])
      this.current = this.history.length - 1      
      this.xIsNext = !this.xIsNext
      this.winner = calculateWinner(this.squares)
    },
    jumpTo: function(i) {
      this.current = i
      this.xIsNext = (i % 2) === 0
      this.winner = calculateWinner(this.squares)
    },
    toggleOrder: function() {
      this.orderIsAsc = !this.orderIsAsc
    }
  }
}
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
