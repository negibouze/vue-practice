<template>
  <input type="text" class="text"
    :name="name"
    :disabled="isDisabled"
  >
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 't-textbox',
  props: {
    name: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisabled (): boolean {
      return this.disabled
    }
  },
  methods: {
  }
})
</script>

<style lang="stylus" scoped>

</style>
