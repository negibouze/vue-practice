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
  name: 'list-test',
  components: {
    ListMenu,
    ListContent
  },
  data() {
    return {
    }
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
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
