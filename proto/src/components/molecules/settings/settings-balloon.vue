<template>
  <div class="wrapper">
    <TTransfer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TTransfer from '@/components/atoms/transfer'

export default Vue.extend({
  name: 'settings-balloon',
  components: {
    TTransfer
  },
  props: {
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
