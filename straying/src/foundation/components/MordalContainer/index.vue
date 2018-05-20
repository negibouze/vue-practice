<template>
  <div class="mordal-wrapper flex flex-center">
    <component :is="currentMordal" class="mordal-component"></component>
  </div>
</template>

<script>
import MordalSearch from '../MordalSearch'

export default {
  name: 'MordalContainer',
  components: {
    MordalSearch
  },
  computed: {
    currentMordal() {
      return MordalSearch
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
