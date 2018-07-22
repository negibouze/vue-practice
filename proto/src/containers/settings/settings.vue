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
import RadioVO from '@/value-objects/radio'

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
    return {}
  },
  computed: {
    items(): RadioVO {
      return this.$store.state.settings.items
    }
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
