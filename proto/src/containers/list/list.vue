<template>
  <div class="list-container">
    <div class="menu"><list-menu /></div>
    <div class="content"><t-list /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ListMenu from '@/containers/list-menu'
import TList from '@/components/atoms/list'

const ListContainerProps = Vue.extend({})
@Component({
  components: {
    ListMenu,
    TList,
  }
})
export default class ListContainer extends ListContainerProps {
}
</script>

<style lang="stylus" scoped>
.list-container
  width: 100%
  height: 100%

.menu
  width: 100%
  height: 40px

.content
  width: 100%
  height: calc(100% - 40px)
</style>
