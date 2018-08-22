<template>
  <Dialog
    :visible="visible"
    @clickbackground="hide"
  >
    {{ condition }}
    <SearchCondition
      :condition="condition"
      @clickAddTransportation="addTransportation"
      @clickDeleteTransportation="deleteTransportation"
      @clickAddArea="addArea"
      @clickDeleteArea="deleteArea"
      @clickCircleSearch="circle"
      @clickRectangleSearch="rectangle"
      @clickClearCondition="clearCondition"
      @clickCancel="cancel"
      @clickLoad="load"
      @changeFrom="changeFrom"
      @changeTo="changeTo"
      @changeSearchType="changeSearchType"
      @changeCheckTypeCondition="changeCheckTypeCondition"
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
import IDateRange from '@/interfaces/date-range';
import IFreeWord from '@/interfaces/free-word';
import INumberRange from '@/interfaces/number-range';
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
  changeFrom(k: string, v: string|number): void {
    const w = 'from';
    this._updateChildProperty(k, w, v);
  }
  changeTo(k: string, v: string|number): void {
    const w = 'to';
    this._updateChildProperty(k, w, v);
  }
  changeSearchType(k: string, v: number): void {
    const w = 'searchType';
    this._updateChildProperty(k, w, v);
  }
  changeCheckTypeCondition(k: string, v: string|number, checked: boolean): void {
    const p = this._hasProperty(k) ? cloneDeep(this.condition[k]) : [];
    // assert(!Array.isArray(p), '');
    const i = p.indexOf(v);
    if (checked) {
      if (i === -1) {
        p.push(v);
      }
    } else {
      if (i > -1) {
        p.splice(i, 1);
      }
    }
    this.$set(p, k, v);
    this._dispatch(k, p);
  }
  addTransportation(): void {
    this._addBlock('transportations');
  }
  deleteTransportation(index: number): void {
    this._deleteBlock('transportations', index);
  }
  addArea(): void {
    this._addBlock('areas');
  }
  deleteArea(index: number): void {
    this._deleteBlock('areas', index);
  }
  circle(form: HTMLFormElement): void {
    this.$store.dispatch('condition/determine');
    this.hide();
    this.$store.dispatch('circle/begin');
  }
  rectangle(form: HTMLFormElement): void {
    this.$store.dispatch('condition/determine');
    this.hide();
  }
  clearCondition(): void {
    this.$store.dispatch('condition/clear');
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
  // convenience method
  _addBlock(key: string): void {
    const value = this._hasProperty(key) ? cloneDeep(this.condition[key]) : [{}];
    value.push({});
    this.$store.dispatch('condition/update', { key, value });
  }
  _deleteBlock(key: string, index: number): void {
    // assert(!this.condition.hasOwnProperty(key), '');
    const value = cloneDeep(this.condition[key]);
    // assert(value.length < 2, '');
    value.splice(index, 1);
    this.$store.dispatch('condition/update', { key, value });
  }
  _hasProperty(k: string): boolean {
    return this.condition.hasOwnProperty(k);
  }
  _getRangeTypeProperty(k: string): IDateRange|INumberRange {
    return this._hasProperty(k) ? cloneDeep(this.condition[k]) : {};
  }
  _updateChildProperty(parentKey: string, k: string, v: string|number): void {
    if (v) {
      this._setChildProperty(parentKey, k, v);
    } else {
      this._deleteChildProperty(parentKey, k);
    }
  }
  _setChildProperty(parentKey: string, k: string, v: string|number): void {
    const p = this._getRangeTypeProperty(parentKey);
    this.$set(p, k, v);
    this._dispatch(parentKey, p);
  }
  _deleteChildProperty(parentKey: string, k: string): void {
    const p = this._getRangeTypeProperty(parentKey);
    this.$delete(p, k);
    this._dispatch(parentKey, p);
  }
  _dispatch(key: string, value: string|number): void {
    this.$store.dispatch('condition/update', { key, value });
  }
}
</script>
