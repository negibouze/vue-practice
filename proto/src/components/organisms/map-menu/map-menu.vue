<template>
  <div class="flex">
    <DropDown></DropDown>
    <DropDown></DropDown>
    <DropDown></DropDown>
    <TButton @onclick="click">ボタン</TButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DropDown from '@/components/atoms/dropdown'
import TButton from '@/components/atoms/button'

export default Vue.extend({
  name: 'map-menu',
  components: {
    DropDown,
    TButton
  },
  methods: {
    click (evt: MouseEvent): void {
      console.log(evt)
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
