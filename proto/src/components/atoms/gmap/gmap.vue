<template>
  <div class="map" ref="map"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const GmapProps = Vue.extend({
  props: {
    projects: Array
  }
})
@Component({
  components: {}
})
export default class Gmap extends GmapProps {
  mapObj: google.maps.Map | null = null
  // lifecycle hook
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
  // method
  addClickListener(fn: Function): void {
    if (!(!!this.mapObj)) { return }
    this.mapObj.addListener('click', fn)
  }
  // removeClickListener(): void {
  //   if (!(!!this.mapObj)) { return }
  //   this.maps.event.clearListeners(this.mapObj, 'click');
  // }
  // drawMarker(projects): void {
  //   projects.forEach(v => {
  //     new this.maps.Marker({
  //       position: new this.maps.LatLng(v.lat, v.lng),
  //       map: this.mapObj,
  //       title: v.name
  //     })
  //   })
  // }
  // drawCircle(radius): void {
  //   if (!(!!this.startingPoint)) { return }
  //   if (this.drawingObj) {
  //     this.updateWithTimer(this.updateCircle, radius);
  //   } else {
  //     const options = { ...baseDrawingOptions, ...{ 'map': this.mapObj, 'center': this.startingPoint, radius } }
  //     this.drawingObj = new this.maps.Circle(options)
  //   }
  // }
  // updateCircle(radius): void {
  //   this.drawingObj.setRadius(radius);
  // }
  updateWithTimer(fn, ...args): void {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
    this.timerId = setTimeout(() => {
      fn(...args)
      this.timerId = null
    }, this.waitTime)
  }
  // removeDrawingObject(): void {
  //   if (!(!!this.drawingObj)) { return }
  //   this.drawingObj.setMap(null)
  //   this.drawingObj = null
  //   this.startingPoint = null
  // }
  // dynamic component
  $refs!: {
    map: HTMLDivElement
  }
}
</script>

<style lang="stylus" scoped>
.map
  width: 100%
  height: 100%
</style>
