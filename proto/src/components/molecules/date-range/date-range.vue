<template>
  <div>
    <date-picker
      :placeholder="leftPlaceholder"
      :picker-options="leftPickerOptions"
      :current-value="currentLeftValue"
      @change="changeLeft"
    />
    <span>〜</span>
    <date-picker
      :placeholder="rightPlaceholder"
      :picker-options="rightPickerOptions"
      :current-value="currentRightValue"
      @change="changeRight"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import DatePicker from '@/components/atoms/date-picker'

const DateRangeProps = Vue.extend({
  props: {
    currentLeftValue: String,
    currentRightValue: String,
  }
})
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
  changeLeft(v: object): void {
    this.leftValue = v;
    this.$emit('changeLeft', this._format(v));
  }
  changeRight(v: object): void {
    this.rightValue = v;
    this.$emit('changeRight', this._format(v));
  }
  // convenience method
  _format(date): string {
    if (!date) { return ''; }
    const y = date.getFullYear();
    const m = `0${date.getMonth() + 1}`.slice(-2);
    const d = `0${date.getDate()}`.slice(-2);
    return `${y}-${m}-${d}`;
  }
}
</script>

<style lang="stylus" scoped>
</style>
