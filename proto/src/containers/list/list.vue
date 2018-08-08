<template>
  <div class="list-container">
    <div class="menu">
      <list-menu
        @clickVertical="clickVertical"
        @clickHorizontal="clickHorizontal"
        @clickFull="clickFull"
        @clickMinimize="clickMinimize"
      />
    </div>
    <div class="content"><t-table /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ListMenu from '@/components/organisms/list-menu'
import { TTable } from '@/components/atoms/list';
import { MapLayout } from '@/store/modules/map';

const ListContainerProps = Vue.extend({})
@Component({
  components: {
    ListMenu,
    TTable,
  }
})
export default class ListContainer extends ListContainerProps {
  clickVertical (e: MouseEvent): void {
    this.$store.dispatch('map/changeLayout', MapLayout.SplitVertical);
  }
  clickHorizontal (e: MouseEvent): void {
    this.$store.dispatch('map/changeLayout', MapLayout.SplitHorizontal);
  }
  clickFull (e: MouseEvent): void {
    this.$store.dispatch('map/changeLayout', MapLayout.ListFull);
  }
  clickMinimize (e: MouseEvent): void {
    this.$store.dispatch('map/changeLayout', MapLayout.MapFull);
  }
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
