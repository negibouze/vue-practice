<template lang="pug">
  <ElSelect
    v-model="selected"
    placeholder="Select"
    @change="handleChange"
    clearable
  >
    <ElOption v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ElSelect>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import Component from 'vue-class-component'
import { Select as ElSelect, Option as ElOption } from 'element-ui'
import SelectVO from '@/value-objects/select'

const SelectProps = Vue.extend({
  props: {
    options: {
      type: Array as Prop<SelectVO[]>,
      required: true
    },
    selectedValue: {
      type: [String, Number]
    }
  }
})
@Component({
  components: {
    ElSelect,
    ElOption
  }
})
export default class TSelect extends SelectProps {
  selected: string | number = this.selectedValue | this.options[0].value
  handleChange (newValue: string | number): void {
    console.log(newValue)
  }
}
</script>

<style lang="stylus" scoped>

</style>
