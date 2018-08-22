<template>
  <free-word
    :name="name"
    :placeholder="placeholder"
    :current-input-value="currentInputValue"
    :current-selected-value="currentSelectedValue"
    @changeWord="changeWord"
    @changeType="changeType"
  />
</template>

<script lang="ts">
import cloneDeep from 'lodash.clonedeep';
import Vue from 'vue';
import Component from 'vue-class-component';
import { FreeWord } from '@/components/molecules/search-condition';

const FreeWordProps = Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: String,
    currentInputValue: String,
    currentSelectedValue: Number,
  },
})
@Component({
  components: {
    FreeWord,
  },
})
export default class FreeWordContainer extends FreeWordProps {
  // method
  changeWord(k: string, v: number): void {
    const w = 'searchWord';
    this._updateProperty(k, w, v);
  }
  changeType(k: string, v: number): void {
    const w = 'searchType';
    this._updateProperty(k, w, v);
  }
  // convenience method
  _getProperty(k: string): IDateRange|INumberRange {
    const c = this.$store.state.condition.currentCondition;
    return c.hasOwnProperty(k) ? cloneDeep(c[k]) : {};
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
