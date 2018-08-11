<template>
  <li class="cell flex">
    <span class="label-container">
      {{ label }}
    </span>
    <span class="switch-container">
      <t-switch
        :currentValue="active"
        @change="change"
      />
    </span>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TSwitch from '@/components/atoms/switch';

const SettingsCellProps = Vue.extend({
  props: {
    label: String,
    active: {
      type: Boolean,
      default: false,
    }
  }
})
@Component({
  components: {
    TSwitch,
  },
})
export default class SettingsCell extends SettingsCellProps {
  // method
  handleClick(e: Object) {
    this.$emit('click', e);
  }
  change(value: object) {
    console.log(value);
    this.$emit('change', value);
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
  flex-grow: 0
  flex-basis: 50px
  text-align: center
</style>
