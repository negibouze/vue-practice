<template>
  <div class="map-container">
    <div class="content"><Gmap /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Gmap from '@/containers/gmapContainer'

export default Vue.extend({
  name: 't-map',
  components: {
    Gmap
  },
  methods: {
    change (evt: Object): void {
      console.log(evt)
    }
  }
})
</script>

<style lang="stylus" scoped>
.map-container
  width: 100%
  height: 100%

.menu
  width: 100%
  height: 40px

.content
  width: 100%
  height: calc(100% - 40px)
</style>
