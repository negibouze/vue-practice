<template>
  <div>
    <t-input-number
      :step="step"
      :size="size"
      :controls="controls"
      :controlsPosition="controlsPosition"
      :name="leftOpts.name"
      :label="leftOpts.label"
      :min="leftOpts.min"
      :max="leftOpts.max"
      :disabled="leftOpts.disabled"
      :precision="leftOpts.precision"
      :currentValue="leftOpts.currentValue"
      @change="changeLeft"
    />
    <span>〜</span>
    <t-input-number
      :step="step"
      :size="size"
      :controls="controls"
      :controlsPosition="controlsPosition"
      :name="rightOpts.name"
      :label="rightOpts.label"
      :min="rightOpts.min"
      :max="rightOpts.max"
      :disabled="rightOpts.disabled"
      :precision="rightOpts.precision"
      :currentValue="rightOpts.currentValue"
      @change="changeRight"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import { TInputNumber } from '@/components/atoms/input';

interface NumberRangeOptions {
  name?: string|null;
  label?: string|null;
  min?: number;
  max?: number;
  disabled?: boolean;
  precision?: number;
  currentValue?: number;
}
const defaultOptions = {
  name: null,
  label: null,
  min: 0,
  max: Infinity,
  disabled: false,
  precision: 0,
  currentValue: 0,
}

const NumberRangeProps = Vue.extend({
  props: {
    value: {},
    step: Number,
    size: {
      type: String,
      default: 'small',
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: 'right'
    },
    leftProps: Object as Prop<NumberRangeOptions>,
    rightProps: Object as Prop<NumberRangeOptions>,
  }
})
@Component({
  components: {
    TInputNumber,
  }
})
export default class NumberRange extends NumberRangeProps {
  leftValue: number|null = null;
  rightValue: number|null = null;
  get leftOpts(): NumberRangeOptions {
    return this._addMissingOptions(this.leftProps);
  }
  get rightOpts(): NumberRangeOptions {
    return this._addMissingOptions(this.rightProps);
  }
  changeLeft(val: number): void {
    this.leftValue = val;
  }
  changeRight(val: number): void {
    this.rightValue = val;
  }
  _addMissingOptions(props: NumberRangeOptions): NumberRangeOptions {
    if (!props) { return defaultOptions; }
    return Object.assign({}, defaultOptions, props);
  }
}
</script>

<style lang="stylus" scoped>
</style>
