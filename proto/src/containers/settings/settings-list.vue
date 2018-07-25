<template>
  <div class="settings-wrapper">
    <Settings @onclick="click">
      <List />
    </Settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Settings from '@/components/organisms/settings'
import { List } from '@/components/molecules/settings'

export default Vue.extend({
  name: 'settings-list-container',
  components: {
    Settings,
    List
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
