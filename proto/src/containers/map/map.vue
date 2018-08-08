<template>
  <t-map
    :projects="projects"
    :layout="layout"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TMap from '@/components/templates/map';
import { MapLayout } from '@/store/modules/map';

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
  get layout(): MapLayout {
    return this.$store.state.map.layout;
  }
}
</script>
