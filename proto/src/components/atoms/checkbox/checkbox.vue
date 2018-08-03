<template>
  <el-checkbox
    v-model="status"
    :value="value"
    :label="value"
    :indeterminate="indeterminate"
    :disabled="disabled"
    :checked="status"
    :name="name"
    :id="id"
    :controls="controls"
    :border="border"
    :size="size"
    @change="handleChange"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Checkbox as ElCheckbox } from 'element-ui';

const CheckboxProps = Vue.extend({
  props: {
    value: [String, Number, Boolean],
    indeterminate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: String,
    id: String,
    controls: String,
    border: Boolean,
    size: String
  }
})
@Component({
  components: {
    ElCheckbox
  }
})
export default class TCheckbox extends CheckboxProps {
  status: boolean = this.checked;
  handleChange(val: object, e: Event): void {
    this.$emit('change', val, e);
  }
}
</script>

<style lang="stylus" scoped>
</style>
