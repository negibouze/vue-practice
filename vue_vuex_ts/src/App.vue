<template>
  <div id="app" class="site-frame">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    localComputed() {
      return 'localComputed'
    },
    ...mapState({
    })
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>

<style lang="stylus" scoped>
</style>
