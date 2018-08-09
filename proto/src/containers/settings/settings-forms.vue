<template>
  <div class="settings-wrapper">
    <settings @click="click">
      <forms />
    </settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Settings from '@/components/organisms/settings'
import { Forms } from '@/components/molecules/settings'

const SettingsFormsContainerProps = Vue.extend({})
@Component({
  components: {
    Settings,
    Forms,
  }
})
export default class SettingsFormsContainer extends SettingsFormsContainerProps {
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
