<template>
  <div class="mordal-search-condition">
    <div class="content">
      あいうえお
    </div>
    <div class="button-container flex flex-between">
      <TButton @onclick="circle">円検索</TButton>
      <TButton @onclick="rectangle">四角検索</TButton>
      <TButton @onclick="hide">閉じる</TButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TButton from '@/components/atoms/button'

export default {
  name: 'mordal-search-condition',
  components: {
    TButton,
  },
  methods: {
    circle (e: MouseEvent): void {
      this.$emit('onclickcirclesearch', e)
    },
    rectangle (e: MouseEvent): void {
      this.$emit('onclickrectanglesearch', e)
    },
    hide (e: MouseEvent): void {
      this.$emit('onclickcancel', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.mordal-search-condition
  width: 60%
  min-width: 640px
  border-radius: 8px
  background-color: #cfcfcf

.input--number
  outline: none
  text-align: right
  padding: 5px
  font-size: 1.2rem

.button-container
  width: 100%
  padding: 10px
</style>
