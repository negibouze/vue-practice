<template>
  <div class="wrapper">
    <settings-list
      :items="items"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import { SettingsList } from '@/components/atoms/list';
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
    SettingsList
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
