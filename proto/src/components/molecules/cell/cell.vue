<template>
  <li
    class="btn"
    @click="handleClick"
    :class=""
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 't-cell',
  props: {
  },
  computed: {
  },
  methods: {
    handleClick(evt: Object) {
      this.$emit('onclick', evt)
    }
  }
})
</script>

<style lang="stylus" scoped>
</style>
