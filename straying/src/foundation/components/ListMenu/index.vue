<template>
  <div class="menu-container">
    <ul class="no-bullet menu flex">
      <li v-for="(v, i) in items"
        :key="i"
        class="menu-item"
      >
        {{ v }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mordalTypes as types } from '@/foundation/types'

export default {
  name: 'list-menu',
  data() {
    return {
      items: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
