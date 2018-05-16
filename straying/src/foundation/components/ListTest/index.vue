<template>
  <div>
    <ListMenu></ListMenu>
    <ListContent></ListContent>
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
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
