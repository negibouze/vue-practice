<template>
  <div class="mordal-wrapper flex flex-center">
    <component :is="content" class="mordal-component"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mordalTypes as types } from '@/foundation/types'
import Loading from '../Loading'
import MordalSearch from '../MordalSearch'

export default {
  name: 'MordalContainer',
  components: {
    Loading,
    MordalSearch
  },
  computed: {
    content() {
      switch (this.type) {
        case types.CIRCLE_SEARCH:
          return MordalSearch
        case types.LOADING:
        default:
          return Loading
      }
    },
    ...mapState('mordal', {
      type: state => state.type
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
