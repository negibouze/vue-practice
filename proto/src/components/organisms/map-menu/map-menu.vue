<template>
  <div class="mapmenu-inner flex">
    <div class="dropdown-outer flex flex-center">
      <DropDown
        :trigger="menu.trigger"
        :items="menu.items"
        @onchange="change"
      />
    </div>
    <t-button type="text" @onclick="clickCond">検索条件</t-button>
    <circle-search
      :visible.sync="visibleCircle"
    />
    <search-condition
      :visible.sync="visibleConditions"
    />
    <overlay
      :visible="visibleOverlay"
      :zIndex="0"
      @onclick="clickOverlay"
    >
      <p class="message">円検索の中心を指定してください。</p>
    </overlay>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import TButton from '@/components/atoms/button';
import DropDown from '@/components/atoms/dropdown';
import Overlay from '@/components/atoms/overlay'
import DropDownVO from '@/value-objects/dropdown';
import { CircleSearch, SearchCondition } from '@/containers/mordal';

const MapMenuProps = Vue.extend({
  props: {
    menu: {
      type: Object as Prop<DropDownVO>,
      required: true,
    },
    visibleCircle: {
      type: Boolean,
      default: false,
    },
    visibleConditions: {
      type: Boolean,
      default: false,
    },
    visibleOverlay: {
      type: Boolean,
      default: false,
    },
  },
})
@Component({
  components: {
    TButton,
    DropDown,
    Overlay,
    CircleSearch,
    SearchCondition,
  }
})
export default class MapMenu extends MapMenuProps {
  clickCond (e: MouseEvent): void {
    this.$emit('clickConditions', e);
  }
  clickOverlay (e: MouseEvent): void {
    this.$emit('clickOverlay', e);
  }
  change (v: string | number): void {
    console.log(v)
  }
}
</script>

<style lang="stylus" scoped>
.mapmenu-inner
  width: 100%
  height: 100%

.dropdown-outer
  width: calc(100% / 3)
  height: 100%

.message
  position: relative
  top: 10vh
  text-align: center
  color: #fff
</style>
