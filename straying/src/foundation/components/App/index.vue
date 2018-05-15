<template>
  <div id="app">
    <header class="site-header">
      ヘッダー
    </header>
    <div class="content-frame flex">
      <nav class="content-menu">
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
export default {
  name: 'App',
  data: function() {
    return {
      listItems: [
        { label: 'Home', link: 'home' },
        { label: 'Canvas', link: 'canvas' },
        { label: 'PDF', link: 'pdf' },
        { label: 'Map', link: 'map' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
