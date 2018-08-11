<template>
  <ul class="no-bullet">
    <settings-cell v-for="(v, i) in items"
      :key="'items-' + i"
      :label="v.label"
      :active="v.active"
    />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SettingsCell from '@/components/atoms/settings-cell';

const SettingsListProps = Vue.extend({
  props: {
    items: {
      type: Array as Prop<SettingsItem>,
      required: true
    },
  },
})
@Component({
  components: {
    SettingsCell,
  }
})
export default class SettingsList extends SettingsListProps {
  // method
  click(val: string) {
    console.log(val)
  }
}
</script>

<style lang="stylus" scoped>
</style>
