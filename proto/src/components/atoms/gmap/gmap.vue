<template>
  <div ref="map" class="map"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const GmapProps = Vue.extend({
  props: {}
})
@Component({
  components: {}
})
export default class Gmap extends GmapProps {
  mapObj: google.maps.Map | null = null
  mounted () {
    const map = new google.maps.Map(this.$refs.map, {
      fullscreenControl: false,
      streetViewControl: false,
      zoom: 15,
      minZoom: 10,
      maxZoom: 20,
      center: new google.maps.LatLng(35.6927224, 139.6926458),
      gestureHandling: 'auto',
      scrollwheel: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }  
      ]
    })
    this.mapObj = map
  }
}
</script>

<style lang="stylus" scoped>
.map
  width: 100%
  height: 100%
</style>
