<template>
  <div id="app" class="site-frame">
    <header class="site-header">
      ヘッダー
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
    <Overlay v-if="isShow">
      <template slot="inner-content">
        <MordalContainer></MordalContainer>
      </template>
    </Overlay>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Hamburger from '../Hamburger'
import Overlay from '../Overlay'
import MordalContainer from '../MordalContainer'

export default {
  name: 'App',
  components: {
    Hamburger,
    Overlay,
    MordalContainer
  },
  data() {
    return {
      listItems: [
        { label: 'Home', link: 'home' },
        { label: 'Canvas', link: 'canvas' },
        { label: 'Chart', link: 'chart' },
        { label: 'Map', link: 'map' },
        { label: 'Trial', link: 'trial' }
      ],
      active: false,
      isClosed: false
    }
  },
  computed: {
    localComputed() {
      return 'localComputed'
    },
    ...mapState('mordal', {
      isShow: state => state.isShow
    })
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
