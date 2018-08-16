<template>
  <Area
    :id="`${name}-${index}`"
    :is-delete="1 <= index"
    :prefectures="item_.prefectures"
    :municipalities="item_.municipalities"
    :current-prefecture="item_.currentPrefectureId"
    :current-municipality="item_.currentMunicipalityId"
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
import AreaItem from '@/interfaces/area-item';

const AreaProps = Vue.extend({
  props: {
    name: String,
    index: Number,
    item: Object as Prop<AreaItem>,
  },
})
@Component({
  components: {
    Area,
  },
})
export default class AreaContainer extends AreaProps {
  item_: AreaItem = this.item ? this.item : {
    prefectures: this.prefectures,
    municipalities: this.municipalities,
    currentPrefectureId: 0,
    currentMunicipalityId: 0,
  };
  get prefectures(): SelectItem[] {
    const v = this.$store.state.conditions.prefectures;
    return v ? v : [{ value: 0, label: '' }];
  }
  get municipalities(): SelectItem[] {
    const v = this.$store.state.conditions.municipalities;
    return v ? v : [{ value: 0, label: '' }];
  }
  changePrefecture(lineId: number): void {
    this.$store.dispatch('conditions/stations', lineId);
  }
  clickDelete(): void {
    this.$emit('clickDelete', this.index);
  }
}
</script>

<style lang="stylus" scoped>
</style>