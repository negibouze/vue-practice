<template>
  <el-switch
    v-model="val"
    :value="val"
    :disabled="disabled"
    :width="width"
    :active-icon-class="activeIconClass"
    :inactive-icon-class="inactiveIconClass"
    :active-text="activeText"
    :inactive-text="inactiveText"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    :active-value="activeValue"
    :inactive-value="inactiveValue"
    :name="name"
    :id="id"
    @change="handleChange"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Switch as ElSwitch } from 'element-ui';

const SwitchProps = Vue.extend({
  props: {
    currentValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: Boolean,
    width: Number,
    activeIconClass: String,
    inactiveIconClass: String,
    activeText: String,
    inactiveText: String,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: String,
    id: String,
  }
})
@Component({
  components: {
    ElSwitch,
  },
})
export default class TSwitch extends SwitchProps {
  val: boolean|string|number = this.currentValue;
  handleChange(value: object) {
    this.$emit('change', value);
  }
}
</script>

<style lang="stylus" scoped>
</style>
