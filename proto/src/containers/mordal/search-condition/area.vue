<template>
  <Area
    :id="`${name}-${index}`"
    :is-delete="1 <= index"
    :prefectures="prefectures"
    :municipalities="municipalities"
    :current-prefecture="prefecture"
    :current-municipality="municipality"
    @changePrefecture="changePrefecture"
    @clickDelete="clickDelete"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Prop from 'vue/types/options';
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
})
@Component({
  components: {
    Area,
  },
})
export default class AreaContainer extends AreaProps {
  // initial data
  municipalities: SelectItem[] = [{ value: 0, label: '' }];
  // computed
  get prefectures(): SelectItem[] {
    return this.$store.state.condition.prefectures;
  }
  get prefecture(): Number {
    return this.item.prefectureId ? this.item.prefectureId : 0;
  }
  get municipality(): Number {
    return this.item.municipalityId ? this.item.municipalityId : 0;
  }
  // method
  changePrefecture(prefectureId: number): void {
    this.$store.dispatch('condition/municipalities', prefectureId).then((municipalities) => {
      this.municipalities = municipalities;
    });
  }
  clickDelete(): void {
    this.$emit('clickDelete', this.index);
  }
  _isEmptyObject(obj: Object) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
}
</script>
