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
      @clickCancel="cancel"
      @clickLoad="load"
      @changeFrom="changeFrom"
      @changeTo="changeTo"
      @changeType="changeType"
      @changeCondition="changeCondition"
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
    this._updateProperty(k, w, v);
  }
  changeTo(k: string, v: string|number): void {
    const w = 'to';
    this._updateProperty(k, w, v);
  }
  changeType(k: string, v: number): void {
    const w = 'searchType';
    this._updateProperty(k, w, v);
  }
  changeCondition(key: string, value: string|number|object): void {
    console.log(`${key}: ${value}`);
    // this.$store.dispatch('condition/update', { key, value });
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
  // convenience method
  _addBlock(key: string): void {
    const value = this.condition.hasOwnProperty(key) ? cloneDeep(this.condition[key]) : [{}];
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
  _getProperty(k: string): IDateRange|INumberRange {
    return this.condition.hasOwnProperty(k) ? cloneDeep(this.condition[k]) : {};
  }
  _updateProperty(parentKey: string, k: string, v: string|number): void {
    if (v) {
      this._setProperty(parentKey, k, v);
    } else {
      this._deleteProperty(parentKey, k);
    }
  }
  _setProperty(parentKey: string, k: string, v: string|number): void {
    const value = this._getProperty(parentKey);
    this.$set(value, k, v);
    this._dispatch(parentKey, value);
  }
  _deleteProperty(parentKey: string, key: string): void {
    const value = this._getProperty(parentKey);
    this.$delete(value, key);
    this._dispatch(parentKey, value);
  }
  _dispatch(key: string, value: string|number): void {
    this.$store.dispatch('condition/update', { key, value });
  }
}
</script>
