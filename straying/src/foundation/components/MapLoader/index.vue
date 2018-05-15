<template>
  <div class="container">
    マップローダー
    <Map :gMaps="google" v-if="google"></Map>
    <Loading v-else></Loading>
  </div>
</template>

<script>
import Map from '../Map'
import Loading from '../Loading'

export default {
  name: 'MapLoader',
  components: {
    Map,
    Loading
  },
  data: function() {
    return {
      google: null
    }
  },
  methods: {
    initializeMap (){
      // const mapContainer = this.$el.querySelector('#map')
      // const { Map } = this.google.maps
      // this.map = new Map(mapContainer, this.mapConfig)
    }
  },
  created: function() {
    this.google = window.google.maps
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
