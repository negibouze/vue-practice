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
      @clickCancel="hide"
      @clickLoad="load"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import cloneDeep from 'lodash.clonedeep';
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
  currentCondition: ISearchCondition = {};
  isReset: boolean = false;
  // computed
  get condition(): ISearchCondition {
    if (!this.isReset) {
      return this.currentCondition;
    }
    const c = this.$store.state.condition.condition;
    if (c) {
      this.currentCondition = cloneDeep(c);
    }
    return this.currentCondition;
  }
  // method
  addTransportation(): void {
    if (!this.currentCondition.transportations) {
      this.$set(this.currentCondition, 'transportations', []);
    }
    this.currentCondition.transportations.push({});
  }
  deleteTransportation(index: number): void {
    if (index < 0 || this.currentCondition.transportations.length <= index) { return; }
    this.currentCondition.transportations.splice(index, 1);
  }
  addArea(): void {
    if (!this.currentCondition.areas) {
      this.$set(this.currentCondition, 'areas', []);
    }
    this.currentCondition.areas.push({});
  }
  deleteArea(index: number): void {
    if (index < 0 || this.currentCondition.areas.length <= index) { return; }
    this.currentCondition.areas.splice(index, 1);
  }
  circle(form: HTMLFormElement): void {
    console.log(form)
    this.$store.dispatch('condition/update', this.currentCondition).then(() => {
      this.hide();
      this.$store.dispatch('circle/begin');
    });
  }
  rectangle(form: HTMLFormElement): void {
    this.$store.dispatch('condition/update', this.currentCondition).then(() => {
      this.hide();
    });
  }
  hide(): void {
    this.$store.dispatch('condition/invisible');
    this._discard(this.currentCondition.transportations);
    this._discard(this.currentCondition.areas);
  }
  _discard(obj) {
    if (!obj) { return; } 
    obj.splice(0, obj.length);
    obj.push({});
  }
  load(): void {
    this.isReset = true;
    this.$store.dispatch('condition/load');
  }
}
</script>
