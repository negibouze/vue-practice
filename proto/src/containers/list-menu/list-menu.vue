<template>
  <list-menu
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ListMenu from '@/components/organisms/list-menu'

const ListMenuContainerProps = Vue.extend({})
@Component({
  components: {
    ListMenu,
  }
})
export default class ListMenuContainer extends ListMenuContainerProps {
}
</script>
