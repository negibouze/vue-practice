<template>
  <nav class="content-menu" :class="{ closed: isClosed }">
    <div class="trigger" @click="handleClick" @mouseover="mouseOver" @mouseout="mouseout">
      <div class="hamburger-wrapper">
        <Hamburger :direction='direction' />
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
</template>

<script lang="ts">
import Vue from 'vue'
import Hamburger from '@/components/atoms/hamburger'

export default Vue.extend({
  name: 'sidebar',
  components: {
    Hamburger
  },
  data () {
    return {
      listItems: [
        { label: 'Map', link: 'map' },
        { label: 'Setting', link: 'settings' }
      ],
      active: false,
      isClosed: false
    }
  },
  computed: {
    direction (): string {
      if (this.active) { return '' }
      return this.isClosed ? 'right' : 'left'
    }
  },
  methods: {
    mouseOver (): void {
      this.active = true
    },
    mouseout (): void {
      this.active = false
    },
    handleClick (): void {
      this.isClosed = !this.isClosed
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
