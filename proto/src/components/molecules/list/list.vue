<template>
  <ul>
    <TCell v-for="(v, i) in items"
      :key="'items-' + i"
      @onclick="click"
    />
    {{ v[key] }}
    </TCell>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import TCell from '../cell'

export default Vue.extend({
  name: 't-list',
  components: {
    TCell
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
  },
  methods: {
    click(val: string) {
      console.log(val)
    }
  }
})
</script>

<style lang="stylus" scoped>
</style>
