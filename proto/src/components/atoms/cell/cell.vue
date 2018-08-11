<template>
  <li
  >
    <slot></slot>
    <t-switch />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TSwitch from '@/components/atoms/switch';

const TCellProps = Vue.extend({})
@Component({
  components: {
    TSwitch,
  },
})
export default class TCell extends TCellProps {
  // method
  handleClick(evt: Object) {
    this.$emit('click', evt)
  }
}
</script>

<style lang="stylus" scoped>
</style>
