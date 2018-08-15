<template>
  <el-date-picker
    v-model="value"
    type="date"
    :size="size"
    :format="format"
    :value-format="valueFormat"
    :readonly="readonly"
    :placeholder="placeholder"
    :prefix-icon="prefixIcon"
    :clear-icon="clearIcon"
    :name="name"
    :disabled="disabled"
    :clearable="clearable"
    :id="id"
    :popper-class="popperClass"
    :editable="editable"
    :align="align"
    :picker-options="pickerOptions"
    @change="handleChange"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { DatePicker as ElDatePicker } from 'element-ui'

const DatePickerProps = Vue.extend({
  props: {
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: {
      type: String,
      default: 'Pick a day'
    },
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close'
    },
    name: {
      default: '',
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    pickerOptions: {
      type: Object,
    },
  }
})
@Component({
  components: {
    ElDatePicker
  }
})
export default class DatePicker extends DatePickerProps {
  value: object = '';
  handleChange(val: object): void {
    this.$emit('change', val);
  }
}
</script>

<style lang="stylus" scoped>
</style>
