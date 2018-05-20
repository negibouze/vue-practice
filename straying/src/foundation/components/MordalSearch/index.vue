<template>
  <div class="mordal-search">
    <ul class="no-bullet radius-list">
      <li v-for="v in radius"
        :key="'radius-' + v"
        class="radius-list-item"
      >
        <input type="radio" name="radius" :id=v :value=v>{{ v }}m
      </li>
      <!-- <li class="radius-list-item">
        <label>
          <input type="radio" name="radius" id="any">
          <input type="number" name="" id="" value="0">
        </label>
      </li> -->
    </ul>
    <div class="button-container flex flex-between">
      <ButtonTest title="検索" :onClick="test"></ButtonTest>
      <ButtonTest title="閉じる" :onClick="close"></ButtonTest>
    </div>
  </div>
</template>

<script>
import ButtonTest from '../ButtonTest'

export default {
  name: 'MordalSearch',
  components: {
    ButtonTest
  },
  data() {
    return {
      radius: [
        500,
        750,
        1000,
        2000
      ]
    }
  },
  methods: {
    test() {
      console.log('test')
    },
    close() {
      console.log('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
