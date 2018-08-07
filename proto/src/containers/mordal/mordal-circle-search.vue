<template>
  <Dialog
    :visible="visible"
    :draggable="true"
    @onclickbackground="hide"
  >
    <CircleSearch
      @onchange="change"
      @onclicksearch="search"
      @onclickcancel="hide"
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
  change (evt: Event): void {
    console.log(evt)
  }
  search (): void {
  }
  hide (): void {
    this.$store.dispatch('circle/invisible');
  }
}
</script>
