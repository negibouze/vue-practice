<template>
  <div>
    <span>{{ title }}</span>
    <DropDown
      :trigger="menu.trigger"
      :items="menu.items"
      @onchange="change"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DropDown from '@/components/atoms/dropdown'
import DropDownVO from '@/value-objects/dropdown'

export default Vue.extend({
  name: 'f-dropdown',
  components: {
    DropDown
  },
  props: {
    title: {
      type: String,
      required: true
    },
    menu: {
      type: Object as Prop<DropDownVO>,
      required: true
    }
  },
  computed: {
  },
  methods: {
    change (v: string | number): void {
      console.log(v)
    }
  }
})
</script>

<style lang="stylus" scoped>
</style>
