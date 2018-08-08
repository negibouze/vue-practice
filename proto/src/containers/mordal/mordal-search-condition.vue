<template>
  <Dialog
    :visible="visible"
    @onclickbackground="hide"
  >
    <SearchCondition
      @onclickcirclesearch="circle"
      @onclickrectanglesearch="rectangle"
      @onclickcancel="hide"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Dialog from '@/components/molecules/dialog';
import SearchCondition from '@/components/organisms/search-condition';

const MordalSearchConditionProps = Vue.extend({
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
    SearchCondition,
  },
})
export default class MordalSearchCondition extends MordalSearchConditionProps {
  circle(form: HTMLFormElement): void {
    this.$store.dispatch('search/updateCondition', {}).then(() => {
      this.hide();
    });
  }
  rectangle(form: HTMLFormElement): void {
    this.$store.dispatch('search/updateCondition', {}).then(() => {
      this.hide();
    });
  }
  hide(): void {
    this.$store.dispatch('conditions/invisible');
  }
}
</script>

<style lang="stylus" scoped>
.mordal-search
  width: 270px
  border-radius: 8px
  background-color: #cfcfcf

.button-container
  width: 100%
  padding: 10px
</style>
