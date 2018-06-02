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
import Hamburger from './components/Hamburger'
import Overlay from './components/Overlay'
import MordalContainer from './components/MordalContainer'

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
$base-color = #fff
$main-color = #003F69
$accent-color = #CAB27C

.flex
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: stretch
  justify-content: flex-start

.flex-column
  flex-direction: column

.flex-center
  align-items: center
  justify-content: center

.flex-between
  align-items: space-between
  justify-content: space-between

.select-none
  user-select: none
  -webkit-touch-callout: none
</style>

<style lang="stylus" scoped>
.site-frame
  width: 100%
  height: 100%

.content-menu
  overflow-x: hidden
  transition: all 150ms ease-in-out
  &.closed
    width: 50px

.trigger
  width: 100%
  height: 60px
  padding-right: calc(10px + 6%)
  cursor: pointer

.hamburger-wrapper
  position: relative
  width: 24px
  height: 24px
  top: calc(50% - 12px)
  margin-left: auto
  margin-right: 0

.menu-list
  text-align: center

.menu-list-item
  width: 100%
  height: 50px
  line-height: 50px
  &:hover
    background-color: #eee
  >a
    display: block
    width: 100%
    height: 100%
    text-decoration: none
    color: inherit
    &.active
      font-weight: bold
      background-color: #eee
</style>
