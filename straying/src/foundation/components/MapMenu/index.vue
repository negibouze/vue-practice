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
export default {
  name: 'MapMenu',
  data() {
    return {
      items: [
        'foo',
        'bar',
        'baz'
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
