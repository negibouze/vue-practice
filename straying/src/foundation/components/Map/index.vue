<template>
  <div class="container">
    <MapMenu class="menu"></MapMenu>
    <MapContent class="content" :maps="maps" :projects="projects"></MapContent>
  </div>
</template>

<script>
import MapMenu from '../MapMenu'
import MapContent from '../MapContent'

export default {
  name: 'Map',
  components: {
    MapMenu,
    MapContent
  },
  props: {
    maps: {
      type: Object
    },
    projects: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
