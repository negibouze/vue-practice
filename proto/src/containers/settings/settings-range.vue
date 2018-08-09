<template>
  <div class="settings-wrapper">
    <settings @click="click">
      <range />
    </settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Settings from '@/components/organisms/settings'
import { Range } from '@/components/molecules/settings'

const SettingsRangeContainerProps = Vue.extend({})
@Component({
  components: {
    Settings,
    Range,
  }
})
export default class SettingsRangeContainer extends SettingsRangeContainerProps {
  // method
  click(evt: MouseEvent, form: HTMLFormElement): void {
    console.log(evt);
    console.log(form);
  }
}
</script>

<style lang="stylus" scoped>
.settings-wrapper
  width: 100%
  height: 100%
</style>
