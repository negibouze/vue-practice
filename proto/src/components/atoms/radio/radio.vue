<template>
  <label class="label"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-checked': isChecked }
    ]"
  >
    <input type="radio" class="radio"
      :name="name"
      :disabled="isDisabled"
      :checked="isChecked"
      @change="handleChange"
    >
    <span class=""></span><span class="text"><slot></slot></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 't-radio',
  props: {
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isChecked (): boolean {
      return this.checked
    },
    isDisabled (): boolean {
      return this.disabled
    }
  },
  methods: {
    handleChange (evt: Object): void {
      this.$emit('onchange', 'aiueo', evt);
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
