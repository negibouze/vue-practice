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
    value: {},
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
})
export default class TInputNumber extends InputNumberProps {
  num: number = this.currentValue ? this.currentValue : this.min;
  handleChange(value: object) {
    this.$emit('change', value);
  }
}
</script>

<style lang="stylus" scoped>
</style>
