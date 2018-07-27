<template>
  <div
    v-show="visible"
  >
    <Overlay
      :visible.sync="overlay"
      :window="backgroundArea === 'window'"
      :theme="backgroundTheme"
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
  overlay: boolean = this.background
  handleClick(evt: Object) {
    this.$emit('onclick', evt)
  }
  handleClose(done: () => void) {
    this.$confirm('Are you sure to close this dialog?')
      .then(_ => {
        done();
      })
      .catch(_ => {});
  }
}
</script>

<style lang="stylus" scoped>
</style>
