<template>
  <h1> {{ msg || 'default message' }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'message',
  props: [
    'msg'
  ]
})
</script>
