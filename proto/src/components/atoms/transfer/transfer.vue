<template>
<div>
  <ElTransfer
    :titles="[leftTitle, rightTitle]"
    filterable
    filter-placeholder="Search..."
    :filter-method="filter"
    v-model="values"
    :data="items"
  />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'
import Component from 'vue-class-component'
import { Transfer as ElTransfer } from 'element-ui'

type Item = {
  key: number,
  label: string
}

const TransferProps = Vue.extend({
  props: {
    leftTitle: {
      type: String,
      default: '非表示'
    },
    rightTitle: {
      type: String,
      default: '表示'
    },
    items: {
      type: Array as Prop<Item[]>,
      required: true
    },
    selectedKeys: {
      type: Array as Prop<number[]>,
      required: true
    }
  }
})
@Component({
  components: {
    ElTransfer
  }
})
export default class Transfer extends TransferProps {
  items: Item[] = this.items
  values: number[] = this.selectedKeys
  filter (query: string, item: Item): boolean {
    console.log(query)
    console.log(item)
    return true
  }
}
</script>

<style lang="stylus" scoped>

</style>
