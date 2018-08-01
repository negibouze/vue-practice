<template>
  <div>
    <date-picker
      :placeholder="leftPlaceholder"
      :picker-options="leftPickerOptions"
      @onchange="changeLeft"
    />
    <span>〜</span>
    <date-picker
      :placeholder="rightPlaceholder"
      :picker-options="rightPickerOptions"
      @onchange="changeRight"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import DatePicker from '@/components/atoms/date-picker'

const DateRangeProps = Vue.extend({})
@Component({
  components: {
    DatePicker
  }
})
export default class DateRange extends DateRangeProps {
  leftPlaceholder: string = 'Pick a start day';
  rightPlaceholder: string = 'Pick a end day';
  leftValue: object|null = null;
  rightValue: object|null = null;
  get leftPickerOptions () {
    const rightValue = this.rightValue
    return {
      disabledDate (time: object): boolean {
        return !!rightValue && time.getTime() > rightValue.getTime();
      }
    }
  }
  get rightPickerOptions () {
    const leftValue = this.leftValue
    return {
      disabledDate (time: object): boolean {
        return !!leftValue && leftValue.getTime() > time.getTime();
      }
    }
  }
  changeLeft(val: object): void {
    this.leftValue = val;
  }
  changeRight(val: object): void {
    this.rightValue = val;
  }
}
</script>

<style lang="stylus" scoped>
</style>
