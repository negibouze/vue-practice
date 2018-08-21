<template>
  <Area
    :id="`${name}-${index}`"
    :is-delete="1 <= index"
    :prefectures="prefectures"
    :municipalities="municipalities"
    :current-prefecture="prefecture"
    :current-municipality="item.municipalityId"
    @changePrefecture="changePrefecture"
    @changeMunicipality="changeMunicipality"
    @clickDelete="clickDelete"
  />
</template>

<script lang="ts">
import cloneDeep from 'lodash.clonedeep';
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import { Area } from '@/components/molecules/search-condition';
import SelectItem from '@/interfaces/select';
import IArea from '@/interfaces/user-settings/area';

const AreaProps = Vue.extend({
  props: {
    name: String,
    index: Number,
    item: Object as Prop<IArea>,
  },
  watch: {
    prefecture(newVal) {
      this._updateMunicipalities(newVal);
    }
  },
})
@Component({
  components: {
    Area,
  },
})
export default class AreaContainer extends AreaProps {
  // initial data
  municipalities: SelectItem[] = [];
  // lifecycle hook
  mounted() {
    if (this.item.prefectureId) {
      this._updateMunicipalities(this.item.prefectureId);
    }
  }
  // computed
  get prefectures(): SelectItem[] {
    return this.$store.state.condition.prefectures;
  }
  get prefecture(): number {
    return this.item.prefectureId;
  }
  // method
  changePrefecture(v: number): void {
    this._updateCondition('prefectureId', v);
    this._deleteCondition('municipalityId');
  }
  changeMunicipality(v: number): void {
    this._updateCondition('municipalityId', v);
  }
  clickDelete(): void {
    this.$emit('clickDelete', this.index);
  }
  // convenience method
  _updateMunicipalities(prefectureId: number) {
    if (!prefectureId) {
      this.municipalities = [];
      return;
    }
    this.$store.dispatch('condition/municipalities', prefectureId).then((municipalities) => {
      this.municipalities = municipalities;
    });
  }
  _getAreas(): IArea[] {
    const c = cloneDeep(this.$store.state.condition.currentCondition);
    return c.hasOwnProperty('areas') ? c.areas : [{}];
  }
  _updateCondition(k: string, v: string|number): void {
    if (v) {
      this._setCondition(k, v);
    } else {
      this._deleteCondition(k);
    }
  }
  _setCondition(k: string, v: string|number|object): void {
    const value = this._getAreas();
    this.$set(value[this.index], k, v);
    this.$store.dispatch('condition/update', { key: 'areas', value });
  }
  _deleteCondition(k: string): void {
    const value = this._getAreas();
    this.$delete(value[this.index], k);
    this.$store.dispatch('condition/update', { key: 'areas', value });
  }
}
</script>
