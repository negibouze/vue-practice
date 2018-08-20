<template>
  <el-input-number
    v-model="num"
    :step="step"
    :max="max"
    :min="min"
    :disabled="disabled"
    :size="size"
    :controls="controls"
    :controlsPosition="controlsPosition"
    :name="name"
    :label="label"
    :precision="precision"
    @change="handleChange"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { InputNumber as ElInputNumber } from 'element-ui';

const InputNumberProps = Vue.extend({
  props: {
    name: String,
    label: String,
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    disabled: Boolean,
    size: {
      type: String,
      default: '',
    },
    controls: {
      type: Boolean,
      default: true,
    },
    controlsPosition: {
      type: String,
      default: '',
    },
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    },
    currentValue: Number
  }
})
@Component({
  components: {
    ElInputNumber,
  },
  watch: {
    currentValue(newValue) {
      this.num = newValue;
    },
  }
})
export default class TInputNumber extends InputNumberProps {
  num: number = this.currentValue ? this.currentValue : this.min;
  // method
  handleChange(value: object) {
    this.$emit('change', value);
  }
}
</script>

<style lang="stylus">
.el-input
  &.el-input--xsmall
    font-size: 13px
    .el-input__inner
      height: 32px
      line-height: 32px
    .el-input__icon
      line-height: 32px
  &.el-input--xmini
    font-size: 12px
    .el-input__inner
      height: 28px
      line-height: 28px
    .el-input__icon
      line-height: 28px

.el-input-number
  &.el-input-number--xsmall
    width: 100px;
    line-height: 30px
    .el-input-number__decrease,
    .el-input-number__increase
      width: 32px
      font-size: 13px
    .el-input-number__decrease [class*=el-icon],
    .el-input-number__increase [class*=el-icon]
      transform: scale(.9)
    .el-input__inner
      padding-left: 39px
      padding-right: 39px
  &.el-input-number--xmini
    width: 100px
    line-height: 26px
    .el-input-number__decrease,
    .el-input-number__increase
      width: 28px
      font-size: 12px
    .el-input-number__decrease [class*=el-icon],
    .el-input-number__increase [class*=el-icon]
      transform: scale(.8)
    .el-input__inner
      padding-left: 35px
      padding-right: 35px
  .is-controls-right[class*=xsmall] [class*=decrease],
  .is-controls-right[class*=xsmall] [class*=increase]
    line-height: 15px
  .is-controls-right[class*=xmini] [class*=decrease],
  .is-controls-right[class*=xmini] [class*=increase]
    line-height: 13px
</style>
