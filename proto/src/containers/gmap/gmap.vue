<template>
  <div class="map-container">
    <div class="menu"><map-menu /></div>
    <div class="content"><gmap /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MapMenu from '@/containers/map-menu'
import Gmap from '@/components/atoms/gmap'

const GmapContainerProps = Vue.extend({

})
@Component({
  components: {
    MapMenu,
    Gmap,
  }
})
export default class GmapContainer extends GmapContainerProps {

}
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
