<template>
  <div>
    <ListMenu></ListMenu>
    <ListContent :columns="columns" :items="projects"></ListContent>
  </div>
</template>

<script>
import ListMenu from '../ListMenu'
import ListContent from '../ListContent'

export default {
  name: 'ListTest',
  components: {
    ListMenu,
    ListContent
  },
  data() {
    return {
      columns: [
        'baz'
      ]
    }
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
