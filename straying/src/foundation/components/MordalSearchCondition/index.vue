<template>
  <div class="mordal-search-condition">
    <div class="button-container flex flex-between">
      <ButtonTest title="円検索" :onClick="circle"></ButtonTest>
      <ButtonTest title="四角検索" :onClick="rectangle"></ButtonTest>
      <ButtonTest title="閉じる" :onClick="hide"></ButtonTest>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mordalTypes as types } from '@/foundation/types'
import ButtonTest from '../ButtonTest'

export default {
  name: 'MordalSearchCondition',
  components: {
    ButtonTest
  },
  methods: {
    circle() {
      this.endRectangle()
      this.beginCircle()
      this.hide()
    },
    rectangle() {
      this.endCircle()
      this.beginRectangle()
      this.hide()
    },
    ...mapActions({
      beginCircle: 'circle/begin',
      endCircle: 'circle/end',
      beginRectangle: 'rectangle/begin',
      endRectangle: 'rectangle/end'
    }),
    ...mapActions('mordal', [
      'hide'
    ]),
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
