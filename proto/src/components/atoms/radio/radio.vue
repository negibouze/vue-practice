<template>
  <el-radio
    v-model="status"
    :label="item.value"
    :disabled="disabled"
    :name="name"
    :border="border"
    :size="size"
    @change="handleChange"
  >
    {{ item.label }}
  </el-radio>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import Component from 'vue-class-component'
import { Radio as ElRadio } from 'element-ui'
import RadioItem from '@/interfaces/radio'

const RadioProps = Vue.extend({
  value: {
    type: [Object, Boolean],
    default: () => undefined
  },
  disabled: Boolean,
  name: String,
  border: Boolean,
  size: String,
  item: {
    type: Array as Prop<RadioItem>,
    required: true
  }
})
@Component({
  components: {
    ElRadio
  }
})
export default class TRadio extends RadioProps {
  get status(): object|boolean {
    return this.value;
  }
  set status(val: object|boolean) {
    this.$emit('input', val);
  }
  handleChange (val: object|boolean): void {
    this.$emit('change', val);
  }
}
</script>

<style lang="stylus" scoped>

</style>
