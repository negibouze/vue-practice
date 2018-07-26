<template>
  <div class="wrapper">
    <TTransfer
      :items="items"
      :selectedKeys="displayKeys"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import TTransfer from '@/components/atoms/transfer'

export default Vue.extend({
  name: 'settings-balloon',
  components: {
    TTransfer
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    displayKeys: {
      type: Array as Prop<number[]>,
      required: true
    }
  },
  methods: {
  }
})
</script>

<style lang="stylus" scoped>
.wrapper
  width: 100%
  height: 100%
</style>
