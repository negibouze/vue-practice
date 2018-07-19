<template>
  <button
    class="btn"
    @click="handleClick"
    :class="[ type ? type : '' ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 't-button',
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {

  },
  methods: {
    handleClick (evt: MouseEvent): void {
      this.$emit('onclick', evt)
    }
  }
})
</script>

<style lang="stylus" scoped>
.btn
  width: 120px
  height: 40px
  border: 1px solid transparent
  border-radius: 4px
  font-size: inherit
  transition-property: all
  transition-duration: 200ms
  transition-timing-function: ease-in-out
  cursor: pointer
  &:hover
    opacity: 0.8

.default
  background-color: #fcfcfc
  border-color: #c8c8c8
  color: #292b2c

.primary
  background-color: #cce5ff
  border-color: #b8daff
  color: #004085

.error
  background-color: #f8d7da
  border-color: #f5c6cb
  color: #721c24
</style>
