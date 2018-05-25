<template>
  <div class="mordal-search-condition">
    <div class="button-container flex flex-between">
      <ButtonTest title="円検索" :onClick="search"></ButtonTest>
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
    ...mapActions('mordal', [
      'hide'
    ]),
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
