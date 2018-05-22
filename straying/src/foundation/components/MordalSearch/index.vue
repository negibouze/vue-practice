<template>
  <div class="mordal-search">
    <ul class="no-bullet radius-list">
      <li v-for="v in preparedRadius"
        :key="'radius-' + v"
        class="radius-list-item"
        :class="{ active: v === currentValue }"
      >
        <input type="radio" name="radius" :id=v :value=v v-model=currentValue>
        <label :for=v><span class="select-none">{{ v }}m</span></label>
      </li>
      <li class="radius-list-item" :class="{ active: anyValue === currentValue }">
        <input type="radio" name="radius" id="any" :value="anyValue" v-model=currentValue>
        <label for="any"><span class="select-none">その他：</span><input type="number" min="10" max="10000" step="10" class="input--number" @focus="updateValue" @input="updateValue" v-model=anyValue></label>
      </li>
    </ul>
    <div class="button-container flex flex-between">
      <ButtonTest title="検索" :onClick="search"></ButtonTest>
      <ButtonTest title="閉じる" :onClick="hide"></ButtonTest>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ButtonTest from '../ButtonTest'

export default {
  name: 'MordalSearch',
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
      currentValue: 500,
      anyValue: 10
    }
  },
  watch: {
    currentValue(newValue, oldValue) {
      this.updateRadius(newValue)
    }
  },
  methods: {
    search() {
      console.log(this.currentValue)
    },
    close() {
      console.log('close')
    },
    updateValue() {
      this.currentValue = this.anyValue
    },
    ...mapActions('circle', [
      'updateRadius'
    ]),
    ...mapActions('mordal', [
      'hide'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
