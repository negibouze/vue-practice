<template>
  <el-checkbox
    v-model="status"
    :label="label"
    :indeterminate="indeterminate"
    :disabled="disabled"
    :checked="checked"
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
    value: Boolean,
    label: [String, Number],
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
  selfModel: boolean = false;
  get status(): boolean {
    return this.value !== undefined ? this.value : this.selfModel;
  }
  set status(val: boolean) {
    this.$emit('input', val);
    this.selfModel = val;
  }
  handleChange(val: object, e: Event): void {
    this.$emit('change', val, e);
  }
}
</script>

<style lang="stylus" scoped>
</style>
