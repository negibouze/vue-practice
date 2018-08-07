<template>
  <div class="listmenu-inner flex">
    あいうあおあいうえお
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import Component from 'vue-class-component';
import TButton from '@/components/atoms/button'

const ListMenuProps = Vue.extend({
  props: {
  },
})
@Component({
  components: {
    TButton,
  }
})
export default class ListMenu extends ListMenuProps {
  clickCond (evt: MouseEvent): void {
    this.$store.dispatch('conditions/visible');
  }
  change (v: string | number): void {
    console.log(v)
  }
}
</script>

<style lang="stylus" scoped>
.listmenu-inner
  width: 100%
  height: 100%

.dropdown-outer
  width: calc(100% / 3)
  height: 100%
</style>
