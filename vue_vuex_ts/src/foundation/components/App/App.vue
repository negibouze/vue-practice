<template>
  <div id="app" class="App">
    <header class="App-header">
      <img src="./logo.png" alt="Logo" class="App-logo">
      <h1 class="App-title">Welcom to Vue</h1>
    </header>
    <Game />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Game from '@/context/tictactoe/components/Game.vue'

export default Vue.extend({
  name: "App",
  components: {
    Game
  }
})
</script>

<style lang="stylus" scoped>
@import './index'
</style>
