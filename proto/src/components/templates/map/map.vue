<template>
  <div class="wrapper-container flex" :class="{ 'flex-column': isColumn }">
    <gmap
      :projects="projects"
    />
    <list
      v-if="visible"
      :projects="projects"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Gmap from '@/containers/gmap'
import List from '@/containers/list'

const TMapProps = Vue.extend({
  props: {
    projects: Array
  }
})
@Component({
  components: {
    Gmap,
    List,
  },
})
export default class TMap extends TMapProps {
  isColumn: boolean = true;
  get visible(): boolean {
    return !!this.projects && 1 <= this.projects.length;
  }
  foo(): void {
    this.isColumn = !this.isColumn;
  }
}
</script>

<style lang="stylus" scoped>
.wrapper-container
  width: 100%
  height: 100%

.shrink
  flex-shrink: 1
</style>
