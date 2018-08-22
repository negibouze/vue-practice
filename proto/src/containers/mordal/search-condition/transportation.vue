<template>
  <transportation
    :id="`${name}-${index}`"
    :is-delete="1 <= index"
    :lines="lines"
    :stations="stations"
    :current-line="line"
    :from-station="item.fromStationId"
    :to-station="item.toStationId"
    :walk-min="item.walkMin"
    :walk-max="item.walkMax"
    :bus-min="item.busMin"
    :bus-max="item.busMax"
    @changeLine="changeLine"
    @changeFromStation="changeFromStation"
    @changeToStation="changeToStation"
    @changeCondition="changeCondition"
    @clickDelete="clickDelete"
  />
</template>

<script lang="ts">
import cloneDeep from 'lodash.clonedeep';
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import { Transportation } from '@/components/molecules/search-condition';
import SelectItem from '@/interfaces/select';
import ITransportation from '@/interfaces/transportation';

const TransportationProps = Vue.extend({
  props: {
    name: String,
    index: Number,
    item: Object as Prop<ITransportation>,
  },
  watch: {
    line(newVal) {
      this._updateStations(newVal);
    }
  },
})
@Component({
  components: {
    Transportation,
  },
})
export default class TransportationContainer extends TransportationProps {
  // initial data
  stations: SelectItem[] = [];
  // lifecycle hook
  mounted() {
    if (this.item.lineId) {
      this._updateStations(this.item.lineId);
    }
  }
  // computed
  get lines(): SelectItem[] {
    return this.$store.state.condition.lines;
  }
  get line(): Number {
    return this.item.lineId;
  }
  // method
  changeLine(v: number): void {
    this._updateCondition('lineId', v);
    this._deleteCondition('fromStationId');
    this._deleteCondition('toStationId');
  }
  changeFromStation(v: number): void {
    this._updateCondition('fromStationId', v);
  }
  changeToStation(v: number): void {
    this._updateCondition('toStationId', v);
  }
  changeCondition(k: string, v: string|number): void {
    this._updateCondition(k, v);
  }
  clickDelete(): void {
    this.$emit('clickDelete', this.index);
  }
  // convenience method
  _updateStations(lineId: number): void {
    if (!lineId) {
      this.stations = [];
      return;
    }
    this.$store.dispatch('condition/stations', lineId).then((stations) => {
      this.stations = stations;
    });
  }
  _getTransportations(): ITransportation[] {
    const c = cloneDeep(this.$store.state.condition.condition);
    return c.hasOwnProperty('transportations') ? c.transportations : [{}];
  }
  _updateCondition(k: string, v: string|number): void {
    if (v) {
      this._setCondition(k, v);
    } else {
      this._deleteCondition(k);
    }
  }
  _setCondition(k: string, v: string|number): void {
    const value = this._getTransportations();
    this.$set(value[this.index], k, v);
    this.$store.dispatch('condition/update', { key: 'transportations', value });
  }
  _deleteCondition(k: string): void {
    const value = this._getTransportations();
    this.$delete(value[this.index], k);
    this.$store.dispatch('condition/update', { key: 'transportations', value });
  }
}
</script>
