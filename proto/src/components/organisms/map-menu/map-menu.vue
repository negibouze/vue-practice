<template>
  <div class="mapmenu-inner flex">
    <div class="dropdown-outer flex flex-center">
      <DropDown
        :trigger="menu.trigger"
        :items="menu.items"
        @onchange="change"
      />
    </div>
    <TButton type="text" @onclick="clickCond">検索条件</TButton>
    <CircleSearch
      :visible.sync="visibleCircle"
    />
    <SearchCondition
      :visible.sync="visibleConditions"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import DropDown from '@/components/atoms/dropdown';
import TButton from '@/components/atoms/button';
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
  },
})
@Component({
  components: {
    DropDown,
    TButton,
    CircleSearch,
    SearchCondition,
  }
})
export default class MapMenu extends MapMenuProps {
  clickCond (evt: MouseEvent): void {
    this.$store.dispatch('conditions/visible');
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
</style>
