<template>
  <div>
    <TButton @onclick="click">ボタン</TButton>
    <TButton @onclick="click" type="primary">ボタン</TButton>
    <TButton @onclick="click" type="error">ボタン</TButton>
    <Hamburger direction="" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TButton from '@/components/atoms/button'
import Hamburger from '@/components/atoms/hamburger'

export default Vue.extend({
  name: 'app',
  components: {
    TButton,
    Hamburger
  },
  methods: {
    click(val: string) {
      console.log(val)
    }
  }
})
</script>

<!-- global -->
<style lang="styl">
</style>

<!-- this component only -->
<style lang="styl" scoped>
</style>
