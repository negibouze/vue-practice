<template>
  <div class="mordal-search">
    <div class="button-container flex flex-between">
      <ButtonTest title="検索" :onClick="search"></ButtonTest>
      <ButtonTest title="閉じる" :onClick="hide"></ButtonTest>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mordalTypes as types } from '@/foundation/types'
import ButtonTest from '../ButtonTest'

export default {
  name: 'mordal-rectangle-search',
  components: {
    ButtonTest
  },
  data() {
    return {
      preparedRadius: [
        500,
        750,
        1000,
        2000
      ],
      currentValue: 0,
      anyValue: 10
    }
  },
  watch: {
    currentValue(newValue, oldValue) {
      this.updateRadius(newValue)
    }
  },
  methods: {
    updateValue() {
      this.currentValue = this.anyValue
    },
    search() {
      this.circle()
      this.show(types.LOADING)
    },
    ...mapActions('rectangle', [
      'updateRadius'
    ]),
    ...mapActions('mordal', [
      'show',
      'hide'
    ]),
    ...mapActions('search', [
      'rectangle'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
