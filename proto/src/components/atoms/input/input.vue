<template>
  <el-input
    v-model="input"
    :size="size"
    resize="none"
    :form="form"
    :disabled="disabled"
    :readonly="readonly"
    type="text"
    :autosize="false"
    :validateEvent="validateEvent"
    :suffixIcon="suffixIcon"
    :prefixIcon="prefixIcon"
    :label="label"
    :clearable="clearable"
    :tabindex="tabindex"
    @blur="handleBlur"
    @focus="handleFocus"
    @input="handleInput"
    @change="handleChange"
    @clear="handleClear"
    :placeholder="placeholder"
    :name="name"
    :maxlength="maxlength"
    :minlength="minlength"
    :autofocus="autofocus"
    :id="id"
  >
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
    <slot name="prepend" slot="prepend" />
    <slot name="append" slot="append" />
  </el-input>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Input as ElInput } from 'element-ui';

const InputProps = Vue.extend({
  props: {
    size: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    validateEvent: {
      type: Boolean,
      default: true,
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: true,
    },
    tabindex: String,
    currentValue: String,
    placeholder: {
      type: String,
      default: 'Please input',
    },
    name: String,
    maxlength: Number,
    minlength: Number,
    autofocus: {
      type: Boolean,
      default: false,
    },
    id: String,
  },
})
@Component({
  components: {
    ElInput,
  },
  watch: {
    currentValue(newValue) {
      this.input = newValue;
    },
  },
})
export default class TInput extends InputProps {
  input: string = this.currentValue ? this.currentValue : '';
  handleBlur(e: FocusEvent) {
    this.$emit('blur', e);
  }
  handleFocus(e: FocusEvent) {
    this.$emit('focus', e);
  }
  handleInput(v: string) {
    this.$emit('input', v);
  }
  handleChange(v: string) {
    this.$emit('change', v);
  }
  handleClear() {
    this.$emit('update:currentValue', '');
    this.$emit('clear');
  }
}
</script>

<style lang="stylus" scoped>
</style>
