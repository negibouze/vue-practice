<template>
  <div class="mapmenu-inner flex">
    <div class="dropdown-outer flex flex-center">
      <DropDown
        :trigger="menu.trigger"
        :items="menu.items"
        @onchange="change"
      />
    </div>
    <TButton @onclick="click">ボタン</TButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import DropDown from '@/components/atoms/dropdown'
import TButton from '@/components/atoms/button'
import DropDownVO from '@/value-objects/dropdown'

export default Vue.extend({
  name: 'map-menu',
  components: {
    DropDown,
    TButton
  },
  props: {
    menu: {
      type: Object as Prop<DropDownVO>,
      required: true
    }
  },
  methods: {
    click (evt: MouseEvent): void {
      console.log(evt)
    },
    change (v: string | number): void {
      console.log(v)
    }
  }
})
</script>

<style lang="stylus" scoped>
.mapmenu-inner
  width: 100%
  height: 100%

.dropdown-outer
  width: calc(100% / 3)
  height: 100%
</style>
