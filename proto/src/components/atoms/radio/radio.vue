<template>
  <ElRadioGroup v-model="selected">
    <ElRadio v-for="item in items"
      :key="item.value"
      :label="item.value"
      @change="handleChange"
    >
      {{ item.label }}
    </ElRadio>
  </ElRadioGroup>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import Component from 'vue-class-component'
import { Radio as ElRadio, RadioGroup as ElRadioGroup } from 'element-ui'
import RadioVO from '@/value-objects/radio'

const RadioProps = Vue.extend({
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
    ElRadio,
    ElRadioGroup
  }
})
export default class TRadio extends RadioProps {
  selected: string | number = this.selectedValue | this.items[0].value
  handleChange (newValue: string | number): void {
    console.log(newValue)
  }
}
</script>

<style lang="stylus" scoped>

</style>
