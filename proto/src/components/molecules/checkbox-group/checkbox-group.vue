<template>
  <div :class="{ flex: isFlat }">
    <t-checkbox
      v-if="hasAll"
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      <slot name="allcheck-label"></slot>
      <template v-if="!$slots['allcheck-label']">全てチェック</template>
    </t-checkbox>
    <div class="separator" v-if="isFlat" :class="{ active: checkAll || isIndeterminate }"></div>
    <el-checkbox-group
      v-model="checkedVals"
      @change="handleCheckedValuesChange"
      :size="size"
    >
      <t-checkbox v-for="item in items"
        :key="item.value"
        :id="item.id"
        :name="name"
        :label="item.value"
        :checked="isChecked(item.value)"
        :border="border"
        @change="(v) => { handleChange(item.value, v) }"
      >
        {{ item.label }}
      </t-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { CheckboxGroup as ElCheckboxGroup,  Checkbox as ElCheckbox  } from 'element-ui';
import TCheckbox from '@/components/atoms/checkbox';

const CheckboxGroupProps = Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      default: 'default-group'
    },
    hasAll: {
      type: Boolean,
      default: true
    },
    border: Boolean,
    size: String,
    isFlat: {
      type: Boolean,
      default: false,
    },
    checkedValues: {
      type: Array,
      default: []
    },
  }
})
@Component({
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    TCheckbox
  },
  watch: {
    checkedValues: function(newValue) {
      this.checkedVals = newValue;
      this.handleCheckedValuesChange(newValue);
    },
  },
})
export default class CheckboxGroup extends CheckboxGroupProps {
  // initial data
  checkAll: boolean = this.items.length === this.checkedValues.length;
  isIndeterminate: boolean = (1 <= this.checkedValues.length) && this.checkedValues.length < this.items.length;
  checkedVals: number[]|string[] = this.checkedValues;
  allValues: number[]|string[] = this.items.map((item) => item.value);
  // method
  isChecked(v: number|string): boolean {
    return !this.checkedVals && this.checkedVals.indexOf(v) > -1
  }
  handleCheckAllChange(checked: boolean): void {
    this.checkedVals = checked ? this.allValues : [];
    this.isIndeterminate = false;
    for (const item of this.items) {
      this.$emit('change', item.value, checked);
    }
  }
  handleCheckedValuesChange(vals: array): void {
    const count = vals.length;
    this.checkAll = count === this.items.length;
    this.isIndeterminate = count > 0 && count < this.items.length;
  }
  handleChange(v: object, checked: boolean): void {
    this.$emit('change', v, checked);
  }
}
</script>

<style lang="stylus" scoped>
.separator
  margin: 0 5px 0 15px
  width: 10px
  min-height: 21px
  border-left: 1px solid #606266
  &.active
    border-color: #409EFF
</style>
