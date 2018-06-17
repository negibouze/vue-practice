<template>
  <div class="container">
    <div class="">
      <div class="img-container">

      </div>
      <div class="info-container">

      </div>
    </div>
    <div class="list-container">
      <table>
      　<tr>
          <th v-for="(v, i) in titles"
            :key="'th-' + i"
          >
            {{ v }}
          </th>
      　</tr>
      　<tr v-for="(item, i) in items"
            :key="'item-' + i"
          >
          <td v-for="(v, j) in item"
            :key="'td-' + j"
          >
            {{ v }}
          </td>
      　</tr>
      </table>
    </div>
  </div>
</template>

<script>
const item = [
  '319戸',
  'RC一部S32階',
  '72.71㎡',
  '7,534万円',
  '2LDK 55.01㎡～',
  '108台',
  '2016年7月'
]

export default {
  name: 'Trial',
  data() {
    return {
      titles: [
        '総戸数',
        '構造・規模',
        '平均面積',
        '平均価格',
        '間取り',
        '駐車場',
        '竣工年月'
      ],
      items: Array(10).fill(item)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
