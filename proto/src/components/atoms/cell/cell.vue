<template>
  <li
    class="btn"
    @click="handleClick"
    :class="[]"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const TCellProps = Vue.extend({})
@Component({
  components: {
  }
})
export default class TCell extends TCellProps {
  // method
  handleClick(evt: Object) {
    this.$emit('onclick', evt)
  }
}
</script>

<style lang="stylus" scoped>
</style>
