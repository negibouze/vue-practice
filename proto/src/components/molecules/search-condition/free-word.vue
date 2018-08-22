<template>
  <t-input
    :name="name"
    :placeholder="placeholder"
    :id="id"
    :current-value="currentInputValue"
    @change="changeWord"
  >
    <t-select
      slot="append"
      :clearable="false"
      :options="options"
      :selected-value="currentSelectedValue"
      :disabled="!currentInputValue || !currentInputValue.trim()"
      @change="changeType"
      class="input-append"
    />
  </t-input>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import { TInput } from '@/components/atoms/input';
import TSelect from '@/components/atoms/select';
import SelectItem from '@/interfaces/select';

const FreeWordProps = Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: String,
    id: String,
    currentInputValue: String,
    currentSelectedValue: Number,
  },
})
@Component({
  components: {
    TInput,
    TSelect,
  },
})
export default class FreeWord extends FreeWordProps {
  // initial data
  options: SelectItem[] = [
    { value: 1, label: '全ての語を含む' },
    { value: 2, label: '何れかの語を含む' },
    { value: 3, label: '何れの語も含まない' },
  ];
  // computed
  // method
  changeWord(v: string): void {
    this.$emit('changeWord', this.name, v);
    this.$emit('changeType', this.name, this.currentSelectedValue);
  }
  changeType(v: number): void {
    this.$emit('changeType', this.name, v);
  }
}
</script>

<style lang="stylus" scoped>
.input-append
  width: 180px
  min-width: 180px
</style>
