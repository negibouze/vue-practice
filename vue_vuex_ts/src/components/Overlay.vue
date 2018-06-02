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
.overlay
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh

.dark
  background-color: rgba(108, 108, 108, 0.6)

.light
  background-color: rgba(255, 255, 255, 0.3)
</style>
