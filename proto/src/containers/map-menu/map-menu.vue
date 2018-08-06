<template>
  <MapMenu
    :menu="menu"
    :visibleCircle="circle"
    :visibleConditions="conditions"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import MapMenu from '@/components/organisms/map-menu'
import DropDownVO from '@/value-objects/dropdown'

export default Vue.extend({
  name: 'map-menu-container',
  components: {
    MapMenu
  },
  computed: {
    menu(): DropDownVO {
      return this.$store.state.mapmenu.menu;
    },
    circle(): void {
      this.$store.dispatch('conditions/invisible');
      return this.$store.state.circle.visibility;
    },
    rectangle(): void {
      this.$store.dispatch('conditions/invisible');
      return this.$store.state.rectangle.visibility;
    },
    conditions(): void {
      return this.$store.state.conditions.visibility;
    }
  },
  methods: {
    
  }
})
</script>
