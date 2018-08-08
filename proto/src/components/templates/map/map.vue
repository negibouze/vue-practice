<template>
  <div class="wrapper-container flex" :class="{ 'flex-column': isHorizontal }">
    <transition name="fade">
      <gmap
        v-if="!isHideMap"
        :projects="projects"
        class="transition"
      />
    </transition>
    <list
      v-if="visible"
      :projects="projects"
      class="transition"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component'
import Gmap from '@/containers/gmap'
import List from '@/containers/list'
import { MapLayout } from '@/store/modules/map';

const TMapProps = Vue.extend({
  props: {
    projects: Array,
    layout: Number as Prop<MapLayout>,
  }
})
@Component({
  components: {
    Gmap,
    List,
  },
})
export default class TMap extends TMapProps {
  get visible(): boolean {
    return !!this.projects && 1 <= this.projects.length;
  }
  get isHorizontal(): boolean {
    return this.layout === MapLayout.SplitHorizontal;
  }
  get isHideMap(): boolean {
    return this.layout === MapLayout.ListFull;
  }
  get isHideList(): boolean {
    return this.layout === MapLayout.MapFull;
  }
}
</script>

<style lang="stylus" scoped>
.wrapper-container
  width: 100%
  height: 100%

.transition
  transition: all 150ms ease-in-out

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
