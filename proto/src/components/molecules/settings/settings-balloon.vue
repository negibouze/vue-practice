<template>
  <div class="wrapper">
    <ul class="no-bullet">
      <settings-cell v-for="(v, i) in items"
        :key="'items-' + i"
        :label="v.label"
        :active="v.active"
        :show-checkbox="true"
        checkbox-label="改行"
        :checkboxChecked="v.nl"
        @changeSwitch="changeSwitch"
        @changeCheckbox="changeCheckbox"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import SettingsCell from '@/components/atoms/settings-cell';
import { SettingsBallonItem } from '@/interfaces/settings-item';

const SettingsBalloonProps = Vue.extend({
  props: {
    items: {
      type: Array as Prop<SettingsBallonItem>,
      required: true
    },
  },
})
@Component({
  components: {
    SettingsCell
  },
})
export default class SettingsBalloon extends SettingsBalloonProps {
  changeSwitch(value: object) {
    console.log(value);
  }
  changeCheckbox(value: object) {
    console.log(value);
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width: 100%
  height: 100%
</style>
