<template>
  <div>
    <span>{{ title }}</span>
    <TRadio
      :items="items"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import TRadio from '@/components/atoms/radio'

export default Vue.extend({
  name: 'f-radio',
  components: {
    TRadio
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array as Prop<RadioVO[]>,
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
