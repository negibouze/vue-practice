<template>
  <div
    v-show="visible"
    class="dialog-wrapper"
  >
    <div
      :style="{ 'z-index': zIndex+1 }"
      class="test"
    >
      あいうえおあいうえお {{ overlay }} : {{ background }}
    </div>
    <Overlay
      :visible.sync="overlay"
      :window="backgroundArea === 'window'"
      :theme="backgroundTheme"
      :zIndex="zIndex"
      @onclick="hide"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Overlay from '@/components/atoms/overlay'

const DialogProps = Vue.extend({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10
    },
    background: {
      type: Boolean,
      default: true
    },
    backgroundArea: {
      type: String,
      default: 'window'
    },
    backgroundTheme: {
      type: String,
      default: 'dark'
    }
  }
})
@Component({
  components: {
    Overlay
  }
})
export default class Dialog extends DialogProps {
  get overlay (): boolean {
    return this.visible && this.background
  }
  hide() {
    this.$emit('update:visible', false)
  }
  click (evt: MouseEvent): void {
    this.hide()
    evt.preventDefault()
    evt.stopPropagation()
  }
  handleClick (evt: Object): void {
    this.$emit('onclick', evt)
  }
  handleClose (done: () => void): void {
    this.$confirm('Are you sure t o close this dialog?')
      .then(_ => {
        done();
      })
      .catch(_ => {});
  }
}
</script>

<style lang="stylus" scoped>
.dialog-wrapper
  position: relative

.test
  position: fixed
  background-color #fff
  border 1px solid #000
</style>
