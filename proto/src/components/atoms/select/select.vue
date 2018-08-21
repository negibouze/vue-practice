<template>
  <el-select
    v-model="selected"
    :name="name"
    :id="id"
    autoComplete="off"
    :automatic-dropdown="false"
    :size="size"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="filterable"
    :allow-create="false"
    :loading="false"
    :popper-class="popperClass"
    :remote="false"
    :no-match-text="noMatchText"
    :no-data-text="noDataText"
    :filter-method="filterMethod"
    :multiple="false"
    :placeholder="placeholder"
    :default-first-option="defaultFirstOption"
    :reserve-keyword="false"
    :value-key="valueKey"
    :popper-append-to-body="popperAppendToBody"
    @change="handleChange"
    @clear="handleClear"
    :class="{ 'fit-parent' : fitParent }"
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
    name: String,
    id: String,
    automaticDropdown: Boolean,
    size: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    popperClass: String,
    noMatchText: String,
    noDataText: String,
    filterMethod: Function,
    placeholder: {
      type: String,
      default: 'Select',
    },
    defaultFirstOption: {
      type: Boolean,
      default: false,
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    popperAppendToBody: {
      type: Boolean,
      default: true,
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
    fitParent: {
      type: Boolean,
      default: false,
    }
  },
})
@Component({
  components: {
    ElSelect,
    ElOption,
  },
  watch: {
    selectedValue: function(newValue) {
      this.selected = newValue;
    },
  },
})
export default class TSelect extends SelectProps {
  selected: string|number|null = this.selectedValue ? this.selectedValue : null;
  isDisabled(v: object): boolean {
    if (typeof this.disabledOptions === 'boolean') {
      return this.disabledOptions;
    }
    return this.disabledOptions(v);
  }
  handleChange(v: string|number): void {
    this.$emit('change', v);
  }
  handleClear() {
    this.$emit('update:selectedValue', '');
    this.$emit('clear');
  }
}
</script>

<style lang="stylus" scoped>
.fit-parent
  width: 100%
  height: 100%
</style>
