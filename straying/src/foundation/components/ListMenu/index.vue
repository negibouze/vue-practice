<template>
  <div>
    <ul class="no-bullet list flex">
      <li v-for="(v, i) in items"
        :key="i"
        class="list-item"
      >
        {{ v }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListMenu',
  data() {
    return {
      items: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
