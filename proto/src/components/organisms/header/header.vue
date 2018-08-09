<template>
  <div>
    <Logo @click="click" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/atoms/site-logo'

export default Vue.extend({
  name: 't-header',
  components: {
    Logo
  },
  methods: {
    click (evt: MouseEvent): void {
      console.log(evt)
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
