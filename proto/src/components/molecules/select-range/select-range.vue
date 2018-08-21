<template>
  <div>
    <t-select
      :options="options"
      :placeholder="leftPlaceholder"
      :disabled-options="disabledLeft"
      :selected-value.sync="leftValue"
      @change="changeLeft"
      @clear="clearLeft"
      :disabled="!options || options.length <= 0"
    />
    <span>〜</span>
    <t-select
      :options="options"
      :placeholder="rightPlaceholder"
      :disabled-options="disabledRight"
      :selected-value.sync="rightValue"
      @change="changeRight"
      @clear="clearLeft"
      :disabled="!options || options.length <= 0"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import Component from 'vue-class-component'
import TSelect from '@/components/atoms/select'
import SelectItem from '@/interfaces/select'

const SelectRangeProps = Vue.extend({
  props: {
    options: {
      type: Array as Prop<SelectItem[]>,
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
  },
  watch: {
    leftSelectedValue: function(newValue) {
      this.leftValue = newValue;
    },
    rightSelectedValue: function(newValue) {
      this.rightValue = newValue;
    },
  },
})
export default class SelectRange extends SelectRangeProps {
  leftPlaceholder: string = 'Select start';
  rightPlaceholder: string = 'Select end';
  leftValue: string|number|null = this.leftSelectedValue ? this.leftSelectedValue : null;
  rightValue: string|number|null = this.rightSelectedValue ? this.rightSelectedValue : null;
  get disabledLeft () {
    const rightValue = this.rightValue
    return function (val: string|number): boolean {
      return !!rightValue && val >= rightValue;
    }
  }
  get disabledRight () {
    const leftValue = this.leftValue
    return function(v: string|number): boolean {
      return !!leftValue && leftValue >= v;
    }
  }
  changeLeft(v: string|number): void {
    this.leftValue = v;
    this.$emit('changeLeft', v);
  }
  changeRight(v: string|number): void {
    this.rightValue = v;
    this.$emit('changeRight', v);
  }
  clearLeft(): void {
    this.$emit('update:leftSelectedValue', '');
    this.$emit('clearLeft');
  }
  clearRight(): void {
    this.$emit('update:rightSelectedValue', '');
    this.$emit('clearRight');
  }
}
</script>

<style lang="stylus" scoped>
</style>
