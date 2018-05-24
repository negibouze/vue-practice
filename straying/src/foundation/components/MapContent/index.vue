<template>
  <div id="map" class="map"></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mordalTypes as types } from '@/foundation/types'

const drawingColor = '#ff0000'
const baseDrawingOptions = {
    strokeColor: drawingColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: drawingColor,
    fillOpacity: 0.1,
    clickable: false
}
export default {
  name: 'MapContent',
  props: {
    maps: {
      type: Object
    },
    projects: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      timerId: 0,
      waitTime: 500,
      mapObj: null,
      startingPoint: null,
      drawingObj: null,
      drawings: []
    }
  },
  computed: {
    localComputed() {
      return 'localComputed'
    },
    ...mapState('circle', {
      radius: state => state.radius
    }),
    ...mapState('mordal', {
      isShow: state => state.isShow
    }),
    ...mapState('search', {
      circle: state => state.circle,
      rectangle: state => state.rectangle
    })
  },
  watch: {
    radius(newValue) {
      const radius = parseInt(newValue)
      if (!!radius) {
        this.drawCircle(radius)
      }
    },
    isShow(newValue) {
      if (newValue) { return }
      this.removeDrawingObject()
    },
    circle(newValue) {
      if (!newValue) { return }
      this.executeCircle()
    },
    rectangle(newValue) {
      if (!newValue) { return }
      this.executeRectangle()
    },
    projects(newValue) {
      this.drawMarker(newValue)
    }
  },
  methods: {
    drawMarker(projects) {
      projects.forEach(v => {
        new this.maps.Marker({
          position: new this.maps.LatLng(v.lat, v.lng),
          map: this.mapObj,
          title: v.name
        })
      })
    },
    drawCircle(radius) {
      if (!(!!this.startingPoint)) { return }
      if (this.drawingObj) {
        this.updateWithTimer(this.updateCircle, radius);
      } else {
        const options = { ...baseDrawingOptions, ...{ 'map': this.mapObj, 'center': this.startingPoint, radius } }
        this.drawingObj = new this.maps.Circle(options)
      }
    },
    updateCircle(radius) {
      this.drawingObj.setRadius(radius);
    },
    drawRectangle(sw, ne) {
      if (!(!!this.startingPoint)) { return }
      const bounds = new this.maps.LatLngBounds(sw, ne);
      if (this.drawingObj) {
        this.updateWithTimer(this.updateRectangle, bounds);
      } else {
        const options = { ...baseDrawingOptions, ...{ 'map': this.mapObj, 'startPoint': this.startingPoint, bounds } }
        this.drawingObj = new this.maps.Rectangle(options)
      }
    },
    updateRectangle(bounds) {
      this.drawingObj.setBounds(bounds);
    },
    updateWithTimer(fn, ...args) {
      if (this.timerId) {
        clearTimeout(this.timerId)
      }
      this.timerId = setTimeout(() => {
        fn(...args)
        this.timerId = null
      }, this.waitTime)
    },
    removeDrawingObject() {
      if (!(!!this.drawingObj)) { return }
      this.drawingObj.setMap(null)
      this.drawingObj = null
      this.startingPoint = null
    },
    ...mapActions('mordal', [
      'show'
    ]),
    ...mapActions('search', [
      'executeCircle',
      'executeRectangle'
    ])    
  },
  mounted() {
    if (this.mapObj) {
      console.log('The map already exists.')
      return
    }
    const map = new this.maps.Map(document.getElementById('map'), {
      fullscreenControl: false,
      streetViewControl: false,
      zoom: 15,
      minZoom: 10,
      maxZoom: 20,
      center: new this.maps.LatLng(35.6927224, 139.6926458),
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
    map.addListener('click', (e) => {
      this.startingPoint = e.latLng
      this.show(types.CIRCLE_SEARCH)
    })
    this.mapObj = map
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
