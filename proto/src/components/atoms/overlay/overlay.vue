<template>
  <div
    :style="{ 'z-index': zIndex }"
    @click="handleClick"
    :class="[
      {
        'light-theme': theme === 'light',
        'dark-theme': theme === 'dark'
      },
      window ? 'fit-window' : 'fit-parent'
    ]"
    v-show="visible"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const OverlayProps = Vue.extend({
  props: {
    window: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'dark'
    },
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10
    }
  }
})
@Component({})
export default class Overlay extends OverlayProps {
  handleClick (evt: MouseEvent): void {
    this.$emit('onclick', evt)
  }
}
</script>

<style lang="stylus" scoped>
.fit-window
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  margin: 0
  overflow: auto

.fit-parent
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  margin: 0

.light-theme
  background-color: rgba(255, 255, 255, 0.3)

.dark-theme
  background-color: rgba(0, 0, 0, 0.3)
</style>
