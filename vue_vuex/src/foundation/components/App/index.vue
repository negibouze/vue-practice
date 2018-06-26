<template>
  <div id="app" class="App">
    <header class="App-header">
      <img src="./logo.png" alt="Logo" class="App-logo">
      <h1 class="App-title">Welcom to Vue</h1>
    </header>
    <div class="content-frame flex">
      <nav class="content-menu" :class="{ closed: isClosed }">
        <div class="trigger" @click="handleClick" @mouseover="mouseOver" @mouseout="mouseout">
          <div class="hamburger-wrapper">
            <Hamburger :toLeft='active && !isClosed' :toRight='active && isClosed'></Hamburger>
          </div>
        </div>
        <ul class="no-bullet menu-list">
          <li v-for="(item, i) in listItems"
            :key="i"
            class="menu-list-item"
          >
            <router-link
              :to="{ name: item.link, params: {}}"
              exact-active-class="active"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>
      <main class="content-body">
        <router-view></router-view>
      </main>
    </div>
    <footer class="site-footer">
      フッター
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Hamburger from '../Hamburger'

export default {
  name: 'App',
  components: {
    Hamburger
  },
  data() {
    return {
      listItems: [
        { label: 'Tictactoe', link: 'tictactoe' },
        { label: 'Todo', link: 'todo' }
      ],
      active: false,
      isClosed: false
    }
  },
  computed: {
  },
  methods: {
    mouseOver() {
      this.active = true
    },
    mouseout() {
      this.active = false
    },
    handleClick() {
      this.isClosed = !this.isClosed
    }
  }
}
</script>

<style lang="stylus">
@import './style-global'
</style>

<style lang="stylus" scoped>
@import './style'
</style>
