<template>
  <li class="cell flex">
    <span class="label-container">
      {{ label }}
    </span>
    <span class="switch-container">
      <t-switch
        :currentValue="active"
        @change="changeSwitch"
      />
    </span>
    <span
      :v-if="showCheckbox"
      class="checkbox-container"
    >
      <t-checkbox
        :label="checkboxLabel"
        :checked="checkboxChecked"
        @change="changeCheckbox"
      />
    </span>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TSwitch from '@/components/atoms/switch';
import TCheckbox from '@/components/atoms/checkbox';

const SettingsCellProps = Vue.extend({
  props: {
    label: String,
    active: {
      type: Boolean,
      default: false,
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    checkboxLabel: {
      type: String,
      default: "",
    },
    checkboxChecked: {
      type: Boolean,
      defalt: false,
    }
  }
})
@Component({
  components: {
    TSwitch,
    TCheckbox,
  },
})
export default class SettingsCell extends SettingsCellProps {
  // method
  handleClick(e: Object) {
    this.$emit('click', e);
  }
  changeSwitch(value: object) {
    this.$emit('changeSwitch', value);
  }
  changeCheckbox(value: object) {
    this.$emit('changeCheckbox', value);
  }
}
</script>

<style lang="stylus" scoped>
.cell
  position: relative
  width: 100%
  height: 48px
  line-height: 48px
  padding: 0 15px
  border-bottom: 1px solid #ebeef5
  cursor: move
  &:nth-child(1)
    border-top: 1px solid #ebeef5

.label-container
  flex-grow: 1

.switch-container
.checkbox-container
  flex-grow: 0
  flex-basis: 64px
  text-align: center
</style>
