<template>
  <Gmap />
</template>

<script lang="ts">
import Vue from 'vue'
// import { mapActions, mapState } from 'vuex'
import Gmap from '@/components/atoms/gmap'

export default Vue.extend({
  name: 'gmap-container',
  components: {
    Gmap
  },
  computed: {},
  methods: {}
})
</script>
