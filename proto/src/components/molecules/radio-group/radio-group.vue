<template>
  <el-radio-group v-model="selected">
    <t-radio v-for="item in items"
      :key="item.value"
      :item="item"
      @change="handleChange"
    />
  </el-radio-group>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import { RadioGroup as ElRadioGroup } from 'element-ui';
import TRadio from '@/components/atoms/radio';
import RadioVO from '@/value-objects/radio';

const RadioGroupProps = Vue.extend({
  props: {
    items: {
      type: Array as Prop<RadioVO[]>,
      required: true
    },
    selectedValue: {
      type: [String, Number]
    }
  }
})
@Component({
  components: {
    ElRadioGroup,
    TRadio
  }
})
export default class TRadioGroup extends RadioGroupProps {
  selected: string | number = this.selectedValue | this.items[0].value
  handleChange (newValue: string | number): void {
    console.log(newValue)
  }
}
</script>

<style lang="stylus" scoped>

</style>
