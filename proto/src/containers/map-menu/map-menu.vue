<template>
  <MapMenu />
</template>

<script lang="ts">
import Vue from 'vue'
// import { mapActions, mapState } from 'vuex'
import MapMenu from '@/components/organisms/map-menu'

export default Vue.extend({
  name: 'map-menu-container',
  components: {
    MapMenu
  },
  computed: {},
  methods: {
    
  }
})
</script>
