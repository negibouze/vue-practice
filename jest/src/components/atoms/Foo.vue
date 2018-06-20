<template>
  <span>{{ title }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'foo',
  computed: mapGetters({
    title: 'title'
  })
})
</script>
