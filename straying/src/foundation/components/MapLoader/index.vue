<template>
  <div class="container" :class="[{ 'flex': google }, { 'flex-column': google && isColumn }]">
    <template v-if="google">
      <div class="map-container">
        <Map :maps="maps"></Map>
      </div>
      <div class="list-container" v-if="hasItems">
        <ListTest></ListTest>
      </div>
    </template>
    <Loading v-else></Loading>
  </div>
</template>

<script>
import Map from '../Map'
import ListTest from '../ListTest'
import Loading from '../Loading'

export default {
  name: 'MapLoader',
  components: {
    Map,
    ListTest,
    Loading
  },
  data() {
    return {
      google: null,
      maps: null,
      hasItems: true,
      isColumn: true
    }
  },
  methods: {
    initializeMap() {
      // const mapContainer = this.$el.querySelector('#map')
      // const { Map } = this.google.maps
      // this.map = new Map(mapContainer, this.mapConfig)
    }
  },
  mounted() {
    this.google = window.google
    if (this.google) {
      this.maps = this.google.maps
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
