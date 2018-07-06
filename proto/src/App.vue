<template>
  <div>
    <TButton @onclick="click">ボタン</TButton>
    <TButton @onclick="click" type="primary">ボタン</TButton>
    <TButton @onclick="click" type="error">ボタン</TButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TButton from '@/components/atoms/button'

export default Vue.extend({
  name: 'app',
  components: {
    TButton
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
