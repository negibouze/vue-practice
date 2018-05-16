<template>
  <table>
    <tr>
      <th v-for="(v, i) in columns"
        :key="'columns-' + i"
      >
        {{ v }}
      </th>
    </tr>
    <tr v-for="(v, i) in items"
        :key="'items-' + i"
    >
      <td>{{ v.name }}</td>
      <td>{{ v.age }}</td>
      <td>{{ v.address }}</td>
      <td>{{ v.phone }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
