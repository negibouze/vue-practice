<template>
  <t-map
    :projects="projects"
    :layout="layout"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DropDownItems from '@/value-objects/dropdown';
import TMap from '@/components/templates/map';
import { MapLayout } from '@/store/modules/map';

const MapContainerProps = Vue.extend({})
@Component({
  components: {
    TMap,
  },
})
export default class MapContainer extends MapContainerProps {
  // lifecycle hook
  mounted() {
    const lines = this.$store.state.condition.lines
    if (!lines || lines.length === 0) {
      this.$store.dispatch('condition/lines', 1);
    }
    const prefectures = this.$store.state.condition.prefectures
    if (!prefectures || prefectures.length === 0) {
      this.$store.dispatch('condition/prefectures', 1);
    }
  }
  // computed
  get projects(): DropDownItems {
    const p = this.$store.state.search.projects;
    return p ? p : [];
  }
  get layout(): MapLayout {
    return this.$store.state.map.layout;
  }
}
</script>
