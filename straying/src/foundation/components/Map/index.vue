<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    gMaps: {
      type: Object
    }
  },
  data: function() {
    return {
      mapObj: null
    }
  },
  mounted: function() {
    if (this.mapObj) {
      console.log('The map already exists.')
      return
    }
    const myLatlng = new this.gMaps.LatLng(35.6927224, 139.6926458)
    this.mapObj = new this.gMaps.Map(document.getElementById('map'), {
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
