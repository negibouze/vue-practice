<template>
  <div>
    <div><TRadio @onchange="change"></TRadio></div>
    <div><TTextbox></TTextbox></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TRadio from '@/components/atoms/radio'
import TTextbox from '@/components/atoms/textbox'

export default Vue.extend({
  name: 'map',
  components: {
    TRadio,
    TTextbox
  },
  methods: {
    change (evt: Object): void {
      console.log(evt)
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
