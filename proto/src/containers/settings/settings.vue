<template>
  <div class="settings-wrapper">
    <FRadio
      title="Radio"
      :items="items"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FCheckbox, FDropdown, FRadio, FSelect, FTextbox } from '@/components/molecules/form-item'

export default Vue.extend({
  name: 'settings',
  components: {
    FCheckbox,
    FDropdown,
    FRadio,
    FSelect,
    FTextbox
  },
  data () {
    return {
      items: [
        { value: 1, label: '首都圏' },
        { value: 2, label: '関西' },
        { value: 3, label: '東海' }
      ]
    }
  },
  computed: {
  },
  methods: {    
  }
})
</script>

<style lang="stylus" scoped>
.settings-wrapper
  width: 100%
  height: 100%
</style>
