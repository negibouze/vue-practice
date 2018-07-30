<template>
  <Dialog
    :visible="visible"
  >
    <CircleSearch
      @onchange="change"
      @onclicksearch="search"
      @onclickcancel="hide"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Dialog from '@/components/molecules/dialog'
import CircleSearch from '@/components/organisms/circle-search'

export default Vue.extend({
  name: 'mordal-circle-search',
  components: {
    Dialog,
    CircleSearch
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
    change (evt: Event): void {
      console.log(evt)
    },
    search (): void {
    },
    hide (): void {
      this.$emit('update:visible', false)
    }
  }
})
</script>
