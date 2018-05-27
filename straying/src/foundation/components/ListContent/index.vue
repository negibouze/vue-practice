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
      <td v-for="key in Object.keys(v)"
        :key="'item-' + i + '_' + key"
      >
        {{ v[key] }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    columns: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      required: true,
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
