<template>
  <span
    class="toggle-icon"
    :class="[ direction ]"
  >
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

// enum Direction {
//   Left = 'left',
//   Right = 'right'
// }

export default Vue.extend({
  name: 'hamburger',
  props: {
    direction: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="stylus" scoped>
.toggle-icon
.toggle-icon::before
.toggle-icon::after
  position: relative
  display: block
  top: 50%
  left: 50%
  height: 2px
  width: 24px
  background: #5d809d
  content: ''
  transition: all 150ms ease-in-out

.toggle-icon
  transform: translate3d(-50%, 0, 0)
  &::before
    transform: translate3d(-50%, -9px, 0)
  &::after
    transform: translate3d(-50%, 5px, 0)
  &.left
    &::before
      transform: scaleX(0.6) translate3d(-32px, 2.8px, 0) rotate(20deg)
    &::after
      transform: scaleX(0.6) translate3d(-32px, -7px, 0) rotate(-20deg)
  &.right
    &::before
      transform: scaleX(0.6) translate3d(-8px, 2.8px, 0) rotate(-20deg)
    &::after
      transform: scaleX(0.6) translate3d(-8px, -7px, 0) rotate(20deg)
</style>
