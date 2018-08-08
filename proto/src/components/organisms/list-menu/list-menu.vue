<template>
  <div class="listmenu-inner flex">
    <div>
      <t-button type="default" @onclick="clickMinimize" round>_</t-button>
    </div>
    <div>
      <t-button type="default" @onclick="clickVertical" round>||</t-button>
    </div>
    <div>
      <t-button type="default" @onclick="clickHorizontal" round>=</t-button>
    </div>
    <div>
      <t-button type="default" @onclick="clickFull" round>□</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import TButton from '@/components/atoms/button';
import ListMenu from '@/components/organisms/list-menu'
import Message from '@/components/atoms/message';

const ListMenuProps = Vue.extend({
  props: {

  },
})
@Component({
  components: {
    TButton,
    Message,
  }
})
export default class ListMenu extends ListMenuProps {
  clickVertical (e: MouseEvent): void {
    this.$emit('clickVertical', e)
  }
  clickHorizontal (e: MouseEvent): void {
    this.$emit('clickHorizontal', e)
  }
  clickFull (e: MouseEvent): void {
    this.$emit('clickFull', e)
  }
  clickMinimize (e: MouseEvent): void {
    this.$emit('clickMinimize', e)
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
