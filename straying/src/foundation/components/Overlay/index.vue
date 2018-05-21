<template>
  <div class="overlay light" @click="handleClick">
    <slot name="inner-content"></slot>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  methods: {
    handleClick(e) {
      e.stopPropagation()
      // e.preventDefault()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
