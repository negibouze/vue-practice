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
    <Dialog
      :visible.sync="visible"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import DropDown from '@/components/atoms/dropdown'
import TButton from '@/components/atoms/button'
import DropDownVO from '@/value-objects/dropdown'
import Dialog from '@/components/molecules/dialog'

export default Vue.extend({
  name: 'map-menu',
  data () {
    return {
      visible: false
    }
  },
  components: {
    DropDown,
    TButton,
    Dialog
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
      this.visible = true
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
