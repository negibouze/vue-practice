<template>
  <div class="mordal-wrapper flex flex-center">
    <component :is="content" class="mordal-component"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mordalTypes as types } from './types'
import Loading from './Loading'
// import MordalCircleSearch from '../MordalCircleSearch'
// import MordalRectangleSearch from '../MordalRectangleSearch'
// import MordalSearchCondition from '../MordalSearchCondition'

export default {
  name: 'MordalContainer',
  components: {
    Loading,
    // MordalCircleSearch,
    // MordalRectangleSearch,
    // MordalSearchCondition
  },
  computed: {
    content() {
      switch (this.type) {
        case types.SEARCH_CONDITION:
          // return MordalSearchCondition
        case types.CIRCLE_SEARCH:
          // return MordalCircleSearch
        case types.RECTANGLE_SEARCH:
          // return MordalRectangleSearch
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
.mordal-wrapper
  width: 100%
  height: 100%
</style>
