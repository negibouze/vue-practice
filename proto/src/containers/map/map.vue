<template>
  <t-map
    :projects="projects"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TMap from '@/components/templates/map'

const MapContainerProps = Vue.extend({})
@Component({
  components: {
    TMap,
  }
})
export default class MapContainer extends MapContainerProps {
  get projects(): DropDownVO {
    const p = this.$store.state.search.projects;
    return p ? p : [];
  }
}
</script>
