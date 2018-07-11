<template>
  <div id="app" class="site-frame">
    <header class="site-header">
      <Header />
    </header>
    <div class="content-frame flex">
      <Sidebar />
      <main class="content-body">
        <router-view></router-view>
      </main>
    </div>
    <footer class="site-footer">
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/organisms/header'
import Sidebar from '@/components/organisms/sidebar'
import Footer from '@/components/organisms/footer'

export default Vue.extend({
  name: 'app',
  components: {
    Header,
    Sidebar,
    Footer
  }
})
</script>

<!-- global -->
<style lang="styl">
</style>

<!-- this component only -->
<style lang="styl" scoped>
</style>
