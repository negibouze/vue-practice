<template>
  <ElTransfer
    :titles="['非表示', '表示']"
    filterable
    filter-placeholder="Search..."
    :filter-method="filter"
    v-model="values"
    :data="items"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Transfer as ElTransfer } from 'element-ui'

type Item = {
  label: string,
  key: number,
  initial: string
}

const generateData = (): Item[] => {
  const items: Item[] = [];
  const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
  const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
  states.forEach((city, index) => {
    items.push({
      label: city,
      key: index,
      initial: initials[index]
    });
  });
  return items;
};

const TransferProps = Vue.extend({
  // props: {
  //   items: {
  //     type: Array
  //   }
  // }
})
@Component({
  components: {
    ElTransfer
  }
})
export default class Transfer extends TransferProps {
  items: object[] = generateData()
  values: object[] = []
  filter (query: string, item: Item): boolean {
    console.log(query)
    console.log(item)
    return true
  }
}
</script>

<style lang="stylus" scoped>

</style>
