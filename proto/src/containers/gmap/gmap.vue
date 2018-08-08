<template>
  <div class="map-container">
    <div class="menu">
      <map-menu
        :menu="menu"
        :visibleCircle="circle"
        :visibleConditions="conditions"
      />
    </div>
    <div class="content"><gmap /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MapMenu from '@/components/organisms/map-menu'
import Gmap from '@/components/atoms/gmap'
import DropDownVO from '@/value-objects/dropdown'

const GmapContainerProps = Vue.extend({

})
@Component({
  components: {
    MapMenu,
    Gmap,
  }
})
export default class GmapContainer extends GmapContainerProps {
  get menu(): DropDownVO {
    return this.$store.state.map.menu;
  }
  get circle(): void {
    return this.$store.state.circle.visibility;
  }
  get rectangle(): void {
    return this.$store.state.rectangle.visibility;
  }
  get conditions(): void {
    return this.$store.state.conditions.visibility;
  }
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
