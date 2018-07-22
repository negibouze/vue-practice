<template>
  <div class="settings-container">
    <Settings />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Settings from '@/containers/settings'

export default Vue.extend({
  name: 'settings',
  components: {
    Settings
  }
})
</script>

<style lang="stylus" scoped>
.settings-container
  width: 100%
  height: 100%
</style>
