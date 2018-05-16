<template>
  <div class="container">
    <MapMenu class="menu"></MapMenu>
    <MapContent class="content"></MapContent>
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
