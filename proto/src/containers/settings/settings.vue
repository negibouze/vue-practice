<template>
  <div class="settings-wrapper">
    <div>
      <FRadio
        title="Radio"
        :items="items"
      />
    </div>
    <div>
      <FSelect
        title="Select"
        :options="options"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FCheckbox, FDropdown, FRadio, FSelect, FTextbox } from '@/components/molecules/form-item'
import RadioVO from '@/value-objects/radio'
import SelectVO from '@/value-objects/select'

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
    },
    options(): SelectVO {
      return this.$store.state.settings.options
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
