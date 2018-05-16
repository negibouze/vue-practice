<template>
  <div id="map" class="map"></div>
</template>

<script>
export default {
  name: 'MapContent',
  props: {
    maps: {
      type: Object
    }
  },
  data() {
    return {
      mapObj: null
    }
  },
  mounted() {
    if (this.mapObj) {
      console.log('The map already exists.')
      return
    }
    const myLatlng = new this.maps.LatLng(35.6927224, 139.6926458)
    this.mapObj = new this.maps.Map(document.getElementById('map'), {
      fullscreenControl: false,
      streetViewControl: false,
      zoom: 15,
      minZoom: 10,
      maxZoom: 20,
      center: myLatlng,
      gestureHandling: 'auto',
      scrollwheel: false
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
