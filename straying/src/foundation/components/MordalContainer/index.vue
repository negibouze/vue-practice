<template>
  <div class="mordal-wrapper flex flex-center">
    <component :is="content" class="mordal-component"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mordalTypes as types } from '@/foundation/types'
import Loading from '../Loading'
import MordalCircleSearch from '../MordalCircleSearch'
import MordalRectangleSearch from '../MordalRectangleSearch'
import MordalSearchCondition from '../MordalSearchCondition'
import MordalForm from '../MordalForm'

export default {
  name: 'mordal-container',
  components: {
    Loading,
    MordalCircleSearch,
    MordalRectangleSearch,
    MordalSearchCondition,
    MordalForm
  },
  computed: {
    content() {
      switch (this.type) {
        case types.SEARCH_CONDITION:
          return MordalSearchCondition
        case types.CIRCLE_SEARCH:
          return MordalCircleSearch
        case types.RECTANGLE_SEARCH:
          return MordalRectangleSearch
        case types.FORM:
          return MordalForm
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
