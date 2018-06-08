<template>
  <button class="square" :class="{ highlight }" @click="onClick">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "Square",
  props: {
    value: String,
    highlight: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './Square'
</style>
