<template>
  <Dialog
    :visible="visible"
    @onclickbackground="hide"
  >
    <SearchCondition
      @onclickcirclesearch="circle"
      @onclickrectanglesearch="rectangle"
      @onclickcancel="hide"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Dialog from '@/components/molecules/dialog'
import SearchCondition from '@/components/organisms/search-condition'

export default Vue.extend({
  name: 'mordal-search-condition',
  components: {
    Dialog,
    SearchCondition,
  },
  data() {
    return {
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    circle (): void {
    },
    rectangle (): void {
    },
    hide (): void {
      this.$emit('update:visible', false)
    }
  }
})
</script>

<style lang="stylus" scoped>
.mordal-search
  width: 270px
  border-radius: 8px
  background-color: #cfcfcf

.button-container
  width: 100%
  padding: 10px
</style>
