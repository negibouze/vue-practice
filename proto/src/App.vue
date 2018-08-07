<template>
  <div id="app" class="site-frame flex">
    <header class="site-header">
      <t-header />
    </header>
    <div class="content-frame flex">
      <sidebar class="content-menu" />
      <main class="content-body" role="main">
        <router-view></router-view>
      </main>
    </div>
    <footer class="site-footer">
      <t-footer />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import THeader from '@/components/organisms/header'
import Sidebar from '@/components/organisms/sidebar'
import TFooter from '@/components/organisms/footer'

export default Vue.extend({
  name: 'app',
  components: {
    THeader,
    Sidebar,
    TFooter
  }
})
</script>

<!-- global -->
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

.scrollable
  overflow: scroll

.scrollable-x
  overflow-x: scroll

.scrollable-y
  overflow-y: scroll
</style>

<!-- this component only -->
<style lang="stylus" scoped>
.site-frame
  width: 100%
  height: 100%
</style>
