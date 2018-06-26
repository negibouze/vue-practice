<template>
  <span class="toggle-icon" :class="[{ left: toLeft }, { right: toRight }]"></span>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    toLeft: {
      type: Boolean,
      default: false
    },
    toRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
