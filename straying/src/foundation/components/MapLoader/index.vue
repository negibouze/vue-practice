<template>
  <div class="container" :class="[{ 'flex': google }, { 'flex-column': google && isColumn }]">
    <template v-if="google">
      <div class="map-wrapper">
        <Map :maps="maps" :projects="projects"></Map>
      </div>
      <div class="list-wrapper" v-if="hasItems">
        <ListTest :projects="projects"></ListTest>
      </div>
    </template>
    <div class="loading-wrapper flex flex-center" v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      hasItems: false,
      isColumn: true
    }
  },
  computed: {
    ...mapState('search', {
      projects: state => state.projects
    })
  },
  watch: {
    projects(newValue) {
      this.hasItems = (1 <= newValue.length)
      this.hide()
    }
  },
  methods: {
    initializeMap() {
      // const mapContainer = this.$el.querySelector('#map')
      // const { Map } = this.google.maps
      // this.map = new Map(mapContainer, this.mapConfig)
    },
    ...mapActions('mordal', [
      'hide'
    ])    
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
