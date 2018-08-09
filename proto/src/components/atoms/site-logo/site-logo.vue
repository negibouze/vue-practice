<template>
  <div
    class="logo select-none"
    @click="handleClick"
  >
  Logo
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'site-logo',
  props: {
  },
  computed: {
  },
  methods: {
    handleClick (evt: MouseEvent): void {
      this.$emit('click', evt)
    }
  }
})
</script>

<style lang="stylus" scoped>
.logo
  width: 100%
  height: 100%
  cursor: pointer
</style>
