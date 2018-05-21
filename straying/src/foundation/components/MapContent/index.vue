<template>
  <div id="map" class="map"></div>
</template>

<script>
import { mapState } from 'vuex'

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
  computed: {
    localComputed() {
      return 'localComputed'
    },
    ...mapState('circle', {
      radius: state => state.radius
    })
  },
  watch: {
    radius(newValue) {
      console.log(`Radius has changed to ${newValue}`)
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
