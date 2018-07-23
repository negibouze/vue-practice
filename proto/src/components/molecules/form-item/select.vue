<template>
  <div>
    <span>{{ title }}</span>
    <TSelect
      :options="options"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import TSelect from '@/components/atoms/select'
import SelectVO from '@/value-objects/select'

export default Vue.extend({
  name: 'f-select',
  components: {
    TSelect
  },
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array as Prop<SelectVO[]>,
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
