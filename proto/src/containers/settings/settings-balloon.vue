<template>
  <div class="settings-wrapper">
    <settings @onclick="update">
      <balloon
        :items="items"
        :displayKeys="display"
      />
    </settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Settings from '@/components/organisms/settings'
import { Balloon } from '@/components/molecules/settings'

const SettingsBalloonContainerProps = Vue.extend({})
@Component({
  components: {
    Settings,
    Balloon,
  }
})
export default class SettingsBalloonContainer extends SettingsBalloonContainerProps {
  // lifecycle hook
  created() {
    this.get();
  }
  // computed
  get items(): any {
    const items = this.$store.state.settings.balloon.items;
    return items;
  }
  get display(): number[] {
    const keys = this.$store.state.settings.balloon.display;
    return keys;
  }
  // method
  get(): void {
    this.$store.dispatch('settings/balloon/get');
  }
  update(evt: MouseEvent, form: HTMLFormElement): void {
    console.log(form);
    this.$store.dispatch('settings/balloon/update', []);
    evt.preventDefault();
    evt.stopPropagation();
  }
}
</script>

<style lang="stylus" scoped>
.settings-wrapper
  width: 100%
  height: 100%
</style>
