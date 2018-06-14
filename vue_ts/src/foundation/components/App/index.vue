<template>
  <div id="app" class="App">
    <header class="App-header">
      <img src="./logo.png" alt="Logo" class="App-logo">
      <h1 class="App-title">Welcom to Vue</h1>
    </header>
    <Game />
  </div>
</template>

<script>
import Game from '@/context/tictactoe/components/Game.vue'

export default {
  name: "App",
  components: {
    Game
  }
}
</script>

<style lang="stylus" scoped>
.App
  text-align: center

.App-logo
  animation: App-logo-spin infinite 20s linear
  height: 80px

.App-header
  background-color: #222
  height: 150px
  padding: 20px
  color: white

.App-title
  font-size: 1.5em

.App-intro
  font-size: large

@keyframes App-logo-spin
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
</style>
