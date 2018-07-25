<template>
  <div class="settings-wrapper">
    <Settings @onclick="click">
      <Balloon />
    </Settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Settings from '@/components/organisms/settings'
import { Balloon } from '@/components/molecules/settings'

export default Vue.extend({
  name: 'settings-balloon-container',
  components: {
    Settings,
    Balloon
  },
  methods: {
    click (evt: MouseEvent, form: HTMLFormElement): void {
      console.log(evt)
      console.log(form)
    }
  }
})
</script>

<style lang="stylus" scoped>
.settings-wrapper
  width: 100%
  height: 100%
</style>
