<template>
  <Dialog
    :visible="visible"
    @clickbackground="hide"
  >
    <SearchCondition
      :transportations="transportations"
      @clickAddTransportation="addTransportation"
      @clickDeleteTransportation="deleteTransportation"
      @clickcirclesearch="circle"
      @clickrectanglesearch="rectangle"
      @clickcancel="hide"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Dialog from '@/components/molecules/dialog';
import SearchCondition from '@/components/organisms/search-condition';
import TransportationItem from '@/interfaces/transportation-item';

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
  transportations: TransportationItem[] = [{
          lines: [{ value: 0, label: '' }],
          stations: [{ value: 0, label: '' }],
          currentLineId: 0,
          fromStationId: 0,
          toStationId: 0,
          walkMin: 0,
          walkMax: 0,
          busMin: 0,
          busMax: 0,
        }];
  addTransportation(): void {
    this.transportations.push({
      lines: [{ value: 0, label: '' }],
      stations: [{ value: 0, label: '' }],
      currentLineId: 0,
      fromStationId: 0,
      toStationId: 0,
      walkMin: 0,
      walkMax: 0,
      busMin: 0,
      busMax: 0,
    });
  }
  deleteTransportation(index: number): void {
    if (index < 0 || this.transportations.length <= index) { return; }
    this.transportations.splice(index, 1);
  }
  circle(form: HTMLFormElement): void {
    this.$store.dispatch('conditions/update', {}).then(() => {
      this.hide();
      this.$store.dispatch('circle/begin');
    });
  }
  rectangle(form: HTMLFormElement): void {
    this.$store.dispatch('conditions/update', {}).then(() => {
      this.hide();
    });
  }
  hide(): void {
    this.$store.dispatch('conditions/invisible');
  }
}
</script>

<style lang="stylus" scoped>
.mordal-search
  width: 270px
  border-radius: 8px
  background-color: #cfcfcf

.button-container
  width: 100%
  padding: 10px
</style>
