<template>
  <div class="settings-wrapper">
    <Settings @onclick="click">
      <CSV />
    </Settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Settings from '@/components/organisms/settings'
import { CSV } from '@/components/molecules/settings'

export default Vue.extend({
  name: 'settings-csv-container',
  components: {
    Settings,
    CSV
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
