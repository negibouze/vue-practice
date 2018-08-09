<template>
  <div class="settings-wrapper">
    <settings @click="click">
      <csv />
    </settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Settings from '@/components/organisms/settings'
import { Csv } from '@/components/molecules/settings'

const SettingsCsvContainerProps = Vue.extend({})
@Component({
  components: {
    Settings,
    Csv,
  }
})
export default class SettingsCsvContainer extends SettingsCsvContainerProps {
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
