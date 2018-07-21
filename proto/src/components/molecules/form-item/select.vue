<template>
  <div>
    <span>{{ title }}</span>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'f-select',
  components: {

  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
  },
  methods: {
  }
})
</script>

<style lang="stylus" scoped>
</style>
