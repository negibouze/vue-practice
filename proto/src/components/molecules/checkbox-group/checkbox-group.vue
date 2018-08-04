6<template>
  <div>
    <t-checkbox
      v-if="hasAll"
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      <slot name="allcheck-label"></slot>
      <template v-if="!$slots['allcheck-label']">全てチェック</template>
    </t-checkbox>
    <el-checkbox-group
      v-model="checkedValues"
      @change="handleCheckedValuesChange"
      :size="size"
    >
      <t-checkbox v-for="item in items"
        :key="item.value"
        :id="item.id"
        :name="name"
        :label="item.value"
        :checked="item.checked"
        :border="border"
        @change="handleChange"
      >
        {{ item.label }}
      </t-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import { Prop } from 'vue/types/options';
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
  }
})
@Component({
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    TCheckbox
  }
})
export default class CheckboxGroup extends CheckboxGroupProps {
  checkAll: boolean = false;
  isIndeterminate: boolean = true;
  checkedValues: number[]|string[] = [];
  allValues: number[]|string[] = this.items.map((item) => item.value);
  handleCheckAllChange(val: boolean): void {
    this.checkedValues = val ? this.allValues : [];
    this.isIndeterminate = false;
  }
  handleCheckedValuesChange(vals: array): void {
    const count = vals.length;
    this.checkAll = count === this.items.length;
    this.isIndeterminate = count > 0 && count < this.items.length;
  }
  handleChange(val: object, e: Event): void {
    // console.log(val)
  }
}
</script>

<style lang="stylus" scoped>
</style>
