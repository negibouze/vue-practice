<template>
  <div class="mordal-search">
    <div class="header"></div>
    <div class="content"
      @mousedown="stopEventPropagation"
    >
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
        <TButton @onclick="search">検索</TButton>
        <TButton @onclick="hide">閉じる</TButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TButton from '@/components/atoms/button'

export default Vue.extend({
  name: 'circle-search',
  components: {
    TButton
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
    }
  },
  methods: {
    stopEventPropagation(e: Event): void {
      e.stopPropagation();
    },
    updateValue() {
      this.currentValue = this.anyValue
    },
    change (e: Event): void {
      this.$emit('onchange', e)
    },
    search (e: MouseEvent): void {
      this.$emit('onclicksearch', e)
    },
    hide (e: MouseEvent): void {
      this.$emit('onclickcancel', e)
    }
  }
})
</script>

<style lang="stylus" scoped>
.mordal-search
  width: 270px
  border-radius: 8px
  background-color: #cfcfcf

.header
  width: 100%
  height: 40px
  border-radius: 8px 8px 0 0
  cursor: move
  background-color: #4169e1

.radius-list
  width: 100%

.radius-list-item
  width: 100%
  height: 100%
  padding: 10px 15px
  cursor: pointer
  &.active
    background-color: #fff
    font-weight: bold
  > input[type="radio"]
    display: none
    +label
      display: inline-block
      width 100%
      height 100%

.input--number
  outline: none
  text-align: right
  padding: 5px
  font-size: 1.2rem

.button-container
  width: 100%
  padding: 10px
</style>
