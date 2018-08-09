<template>
  <div class="map" ref="map"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import Coordinate from '@/value-objects/coordinate';

const drawingColor = '#ff0000';
const baseDrawingOptions = {
    strokeColor: drawingColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: drawingColor,
    fillOpacity: 0.1,
    clickable: false
};

const GmapProps = Vue.extend({
  props: {
    center: Object as Prop<Coordinate>,
    radius: Number,
    projects: Array,
  }
})
@Component({
  components: {},
  watch: {
    radius(newValue, oldValue) {
      this.drawCircle(newValue);
    }
  }
})
export default class Gmap extends GmapProps {
  mapObj: google.maps.Map|null = null;
  timerId: number = 0;
  waitTime: number = 500;
  drawingObj: object|null = null;
  drawings: array = [];

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
    });
    this.mapObj = map;
    this.addClickListener();
  }
  // method
  addClickListener(): void {
    if (!(!!this.mapObj)) { return }
    this.mapObj.addListener('click', (e: MouseEvent) => {
      this.$emit('clickMap', e.latLng);
    })
  }
  removeClickListener(): void {
    if (!(!!this.mapObj)) { return }
    this.maps.event.clearListeners(this.mapObj, 'click');
  }
  // drawMarker(projects): void {
  //   projects.forEach(v => {
  //     new this.maps.Marker({
  //       position: new this.maps.LatLng(v.lat, v.lng),
  //       map: this.mapObj,
  //       title: v.name
  //     })
  //   })
  // }
  drawCircle(radius): void {
    if (!(!!this.center)) { return }
    if (this.drawingObj) {
      this.updateWithTimer((radius) => {
        this.drawingObj.setRadius(radius);
      }, radius);
    } else {
      const options = { ...baseDrawingOptions, ...{ 'map': this.mapObj, 'center': this.center, radius } }
      this.drawingObj = new google.maps.Circle(options)
    }
  }
  updateWithTimer(fn, ...args): void {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
    this.timerId = setTimeout(() => {
      fn(...args)
      this.timerId = null
    }, this.waitTime);
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
