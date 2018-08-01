<template>
  <el-date-picker
    v-model="value"
    type="date"
    :placeholder="placeholder"
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
    placeholder: {
      type: String,
      default: 'Pick a day'
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
    this.$emit('onchange', val);
  }
}
</script>

<style lang="stylus" scoped>
</style>
