<template>
  <transportation
    :id="`${name}-${index}`"
    :is-delete="1 <= index"
    :lines="lines"
    :stations="stations"
    :current-line="line"
    :from-station="fromStation"
    :to-station="toStation"
    :walk-min="walkMin"
    :walk-max="walkMax"
    :bus-min="busMin"
    :bus-max="busMax"
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
import ITransportation from '@/interfaces/transportation';

const TransportationProps = Vue.extend({
  props: {
    name: String,
    index: Number,
    item: Object as Prop<Transportation>,
  },
})
@Component({
  components: {
    Transportation,
  },
})
export default class TransportationContainer extends TransportationProps {
  // initial data
  stations: SelectItem[] = [{ value: 0, label: '' }];
  // computed
  get lines(): SelectItem[] {
    return this.$store.state.condition.lines;
  }
  get line(): Number {
    return this.item.lineId ? this.item.lineId : 0;
  }
  get fromStation(): Number {
    return this.item.fromStationId ? this.item.fromStationId : 0;
  }
  get toStation(): Number {
    return this.item.toStationId ? this.item.toStationId : 0;
  }
  get walkMin(): Number {
    return this.item.walkMin ? this.item.walkMin : 0;
  }
  get walkMax(): Number {
    return this.item.walkMax ? this.item.walkMax : 0;
  }
  get busMin(): Number {
    return this.item.busMin ? this.item.busMin : 0;
  }
  get busMax(): Number {
    return this.item.busMax ? this.item.busMax : 0;
  }
  // method
  changeLine(lineId: number): void {
    this.$store.dispatch('condition/stations', lineId).then((stations) => {
      this.stations = stations;
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
