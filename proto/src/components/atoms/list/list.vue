<template>
  <ul>
    <t-cell v-for="(v, i) in items"
      :key="'items-' + i"
      @onclick="click"
    />
    {{ v[key] }}
    </t-cell>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TCell from '@/components/atoms/cell'

const TListProps = Vue.extend({})
@Component({
  components: {
    TCell,
  }
})
export default class TList extends TListProps {
  // method
  click(val: string) {
    console.log(val)
  }
}
</script>

<style lang="stylus" scoped>
</style>
