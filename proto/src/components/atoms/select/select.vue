<template>
  <el-select
    v-model="selected"
    :placeholder="placeholder"
    @change="handleChange"
    clearable
  >
    <el-option v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="isDisabled(item.value)"
    />
  </el-select>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import { Select as ElSelect, Option as ElOption } from 'element-ui';
import SelectItem from '@/interfaces/select';

const SelectProps = Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: 'Select',
    },
    options: {
      type: Array as Prop<SelectItem[]>,
      required: true,
    },
    selectedValue: {
      type: [String, Number],
    },
    disabledOptions: {
      type: [Boolean, Function],
      default: false,
    },
  },
})
@Component({
  components: {
    ElSelect,
    ElOption,
  },
})
export default class TSelect extends SelectProps {
  selected: string|number|null = this.selectedValue ? this.selectedValue : null;
  isDisabled (val: object): boolean {
    if (typeof this.disabledOptions === 'boolean') {
      return this.disabledOptions;
    }
    return this.disabledOptions(val);
  }
  handleChange (val: string|number): void {
    this.$emit('change', val);
  }
}
</script>

<style lang="stylus" scoped>

</style>
