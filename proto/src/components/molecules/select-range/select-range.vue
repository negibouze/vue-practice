<template>
  <div>
    <t-select
      :options="options"
      :placeholder="leftPlaceholder"
      :disabled-options="disabledLeft"
      :selected-value="leftSelectedValue"
      @onchange="changeLeft"
    />
    <span>〜</span>
    <t-select
      :options="options"
      :placeholder="rightPlaceholder"
      :disabled-options="disabledRight"
      :selected-value="rightSelectedValue"
      @onchange="changeRight"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import Component from 'vue-class-component'
import TSelect from '@/components/atoms/select'
import SelectVO from '@/value-objects/select'

const SelectRangeProps = Vue.extend({
  props: {
    options: {
      type: Array as Prop<SelectVO[]>,
      required: true
    },
    leftSelectedValue: {
      type: [String, Number]
    },
    rightSelectedValue: {
      type: [String, Number]
    },
  }
})
@Component({
  components: {
    TSelect
  }
})
export default class SelectRange extends SelectRangeProps {
  leftPlaceholder: string = 'Select start';
  rightPlaceholder: string = 'Select end';
  leftValue: string|number|null = null;
  rightValue: string|number|null = null;
  get disabledLeft () {
    const rightValue = this.rightValue
    return function (val: string|number): boolean {
      return !!rightValue && val >= rightValue;
    }
  }
  get disabledRight () {
    const leftValue = this.leftValue
    return function(val: string|number): boolean {
      return !!leftValue && leftValue >= val;
    }
  }
  changeLeft(val: string|number): void {
    this.leftValue = val;
  }
  changeRight(val: string|number): void {
    this.rightValue = val;
  }
}
</script>

<style lang="stylus" scoped>
</style>