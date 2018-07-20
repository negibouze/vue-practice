<template>
  <MapMenu
    :menu="menu"
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
      return this.$store.state.mapmenu.menu
    }
  },
  methods: {
    
  }
})
</script>
