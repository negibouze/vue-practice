<template>
  <div class="map-container">
    <div class="menu">
      <map-menu
        :menu="menu"
        :visibleCircle="circle"
        :visibleConditions="conditions"
        :visibleOverlay="overlay"
        @clickConditions="clickConditions"
        @clickOverlay="clickOverlay"
      />
    </div>
    <div class="content">
      <gmap
        @clickMap="clickMap"
        :center="center"
        :radius="radius"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MapMenu from '@/components/organisms/map-menu';
import Gmap from '@/components/atoms/gmap';
import DropDownVO from '@/value-objects/dropdown';
import Coordinate from '@/value-objects/coordinate';

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
    return this.$store.state.circle.mordal;
  }
  get rectangle(): void {
    return this.$store.state.rectangle.visibility;
  }
  get conditions(): void {
    return this.$store.state.conditions.visibility;
  }
  get overlay(): void {
    return this.$store.state.circle.active;
  }
  get center(): Coordinate {
    return this.$store.state.circle.center;
  }
  get radius(): number {
    return this.$store.state.circle.radius;
  }
  clickConditions(): void {
    this.$store.dispatch('conditions/visible');
  }
  clickOverlay(): void {
    this.$store.dispatch('circle/end');
  }
  clickMap(v: LatLng): void {
    const coordinate = new Coordinate(v.lat(), v.lng());
    this.$store.dispatch('circle/setCenter', coordinate).then(() => {
      this.$store.dispatch('circle/end');
      this.$store.dispatch('circle/showMordal');
    });
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
