<template>
  <Dialog
    :visible="visible"
    :draggable="true"
    @clickbackground="hide"
  >
    <CircleSearch
      @changeValue="change"
      @clicksearch="search"
      @clickcancel="hide"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Dialog from '@/components/molecules/dialog';
import CircleSearch from '@/components/organisms/circle-search';

const MordalCircleSearchProps = Vue.extend({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
})
@Component({
  components: {
    Dialog,
    CircleSearch,
  },
})
export default class MordalCircleSearch extends MordalCircleSearchProps {
  change (v: number): void {
    this.$store.dispatch('circle/updateRadius', v);
  }
  search (): void {
  }
  hide (): void {
    this.$store.dispatch('circle/hideMordal');
  }
}
</script>
