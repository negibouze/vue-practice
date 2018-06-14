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
.square
  background: #fff
  border: 1px solid #999
  float: left
  font-size: 24px
  font-weight: bold
  line-height: 34px
  height: 34px
  margin-right: -1px
  margin-top: -1px
  padding: 0
  text-align: center
  width: 34px

.square:focus
  outline: none

.highlight
  background-color: #ccc
</style>
