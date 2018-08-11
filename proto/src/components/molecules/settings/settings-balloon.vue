<template>
  <div class="wrapper">
    <ul>
      <t-cell v-for="(v, i) in items"
        :key="'items-' + i"
      >
      {{ v.label }}
      </t-cell>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import TCell from '@/components/atoms/cell';
import SettingsItem from '@/interfaces/settings-item';

const SettingsBalloonProps = Vue.extend({
  props: {
    items: {
      type: Array as Prop<SettingsItem>,
      required: true
    },
  },
})
@Component({
  components: {
    TCell
  },
})
export default class SettingsBalloon extends SettingsBalloonProps {
}
</script>

<style lang="stylus" scoped>
.wrapper
  width: 100%
  height: 100%
</style>
