<template>
  <div class="settings-wrapper">
    <settings @onclick="click">
      <list />
    </settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Settings from '@/components/organisms/settings'
import { List } from '@/components/molecules/settings'

const SettingsListContainerProps = Vue.extend({})
@Component({
  components: {
    Settings,
    List,
  }
})
export default class SettingsListContainer extends SettingsListContainerProps {
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
