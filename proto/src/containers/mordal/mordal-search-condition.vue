<template>
  <Dialog
    :visible="visible"
    @clickbackground="hide"
  >
    <SearchCondition
      :condition="condition"
      @clickAddTransportation="addTransportation"
      @clickDeleteTransportation="deleteTransportation"
      @clickAddArea="addArea"
      @clickDeleteArea="deleteArea"
      @clickCircleSearch="circle"
      @clickRectangleSearch="rectangle"
      @clickCancel="cancel"
      @clickLoad="load"
    />
  </Dialog>
</template>

<script lang="ts">
import cloneDeep from 'lodash.clonedeep';
import Vue from 'vue';
import Component from 'vue-class-component';
import Dialog from '@/components/molecules/dialog';
import SearchCondition from '@/components/organisms/search-condition';
import SelectItem from '@/interfaces/select';
import ISearchCondition from '@/interfaces/user-settings/search-condition';

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
  // computed
  get condition(): ISearchCondition {
    return this.$store.state.condition.currentCondition;
  }
  // method
  addTransportation(): void {
    const value = this.condition.hasOwnProperty('transportations') ? cloneDeep(this.condition.transportations) : [{}];
    value.push({});
    this.$store.dispatch('condition/update', { key: 'transportations', value });
  }
  deleteTransportation(index: number): void {
    // assert(!this.condition.hasOwnProperty('transportations'), '');
    const value = cloneDeep(this.condition.transportations);
    // assert(value.length < 2, '');
    value.splice(index, 1);
    this.$store.dispatch('condition/update', { key: 'transportations', value });
  }
  addArea(): void {
    const value = this.condition.hasOwnProperty('areas') ? cloneDeep(this.condition.areas) : [{}];
    value.push({});
    this.$store.dispatch('condition/update', { key: 'areas', value });
  }
  deleteArea(index: number): void {
    // assert(!this.condition.hasOwnProperty('areas'), '');
    const value = cloneDeep(this.condition.areas);
    // assert(value.length < 2, '');
    value.splice(index, 1);
    this.$store.dispatch('condition/update', { key: 'areas', value });
  }
  circle(form: HTMLFormElement): void {
    this.hide();
    this.$store.dispatch('circle/begin');
  }
  rectangle(form: HTMLFormElement): void {
    this.hide();
  }
  cancel(): void {
    this.$store.dispatch('condition/restore');
    this.hide();
  }
  hide(): void {
    this.$store.dispatch('condition/invisible');
  }
  load(): void {
    this.$store.dispatch('condition/load');
  }
}
</script>
