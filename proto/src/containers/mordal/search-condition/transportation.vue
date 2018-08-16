<template>
  <transportation
    :id="`${name}-${index}`"
    :is-delete="1 <= index"
    :lines="item_.lines"
    :stations="item_.stations"
    :current-line="item_.currentLineId"
    :from-station="item_.fromStationId"
    :to-station="item_.toStationId"
    :walk-min="item_.walkMin"
    :walk-max="item_.walkMax"
    :bus-min="item_.busMin"
    :bus-max="item_.busMax"
    @changeLine="changeLine"
    @clickDelete="clickDelete"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Prop from 'vue/types/options';
import Component from 'vue-class-component';
import { Transportation } from '@/components/molecules/search-condition';
import SelectItem from '@/interfaces/select';
import TransportationItem from '@/interfaces/transportation-item';

const TransportationProps = Vue.extend({
  props: {
    name: String,
    index: Number,
    item: Object as Prop<TransportationItem>,
  },
})
@Component({
  components: {
    Transportation,
  },
})
export default class TransportationContainer extends TransportationProps {
  item_: TransportationItem = this.item ? this.item : {
    lines: this.lines,
    stations: this.stations,
    currentLineId: 0,
    fromStationId: 0,
    toStationId: 0,
    walkMin: 0,
    walkMax: 0,
    busMin: 0,
    busMax: 0,
  };
  get lines(): SelectItem[] {
    const v = this.$store.state.conditions.lines;
    return v ? v : [{ value: 0, label: '' }];
  }
  get stations(): SelectItem[] {
    const v = this.$store.state.conditions.stations;
    return v ? v : [{ value: 0, label: '' }];
  }
  changeLine(lineId: number): void {
    this.$store.dispatch('conditions/stations', lineId);
  }
  clickDelete(): void {
    this.$emit('clickDelete', this.index);
  }
}
</script>

<style lang="stylus" scoped>
</style>
