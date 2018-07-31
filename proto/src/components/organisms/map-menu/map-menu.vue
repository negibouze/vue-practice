<template>
  <div class="mapmenu-inner flex">
    <div class="dropdown-outer flex flex-center">
      <DropDown
        :trigger="menu.trigger"
        :items="menu.items"
        @onchange="change"
      />
    </div>
    <TButton @onclick="clickCircle">円検索</TButton>
    <TButton @onclick="clickCond">検索条件</TButton>
    <CircleSearch
      :visible.sync="visibleCircle"
    />
    <SearchCondition
      :visible.sync="visibleCond"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import DropDown from '@/components/atoms/dropdown'
import TButton from '@/components/atoms/button'
import DropDownVO from '@/value-objects/dropdown'
import { CircleSearch, SearchCondition } from '@/containers/mordal'

export default Vue.extend({
  name: 'map-menu',
  data () {
    return {
      visibleCircle: false,
      visibleCond: false
    }
  },
  components: {
    DropDown,
    TButton,
    CircleSearch,
    SearchCondition,
  },
  props: {
    menu: {
      type: Object as Prop<DropDownVO>,
      required: true
    }
  },
  methods: {
    clickCircle (evt: MouseEvent): void {
      this.visibleCircle = true
    },
    clickCond (evt: MouseEvent): void {
      this.visibleCond = true
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
