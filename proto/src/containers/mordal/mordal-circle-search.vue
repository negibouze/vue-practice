<template>
  <Dialog
    :visible="visible"
  >
    <CircleSearch />
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
  }
})
</script>
