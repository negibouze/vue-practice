<template>
  <div class="overlay dark" @click="handleClick"></div>
</template>

<script>
export default {
  name: 'Overlay',
  methods: {
    handleClick(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
