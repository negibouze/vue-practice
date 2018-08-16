<template>
  <Dialog
    :visible="visible"
    @clickbackground="hide"
  >
    <SearchCondition
      :transportations="transportations"
      :areas="areas"
      @clickAddTransportation="addTransportation"
      @clickDeleteTransportation="deleteTransportation"
      @clickAddArea="addArea"
      @clickDeleteArea="deleteArea"
      @clickcirclesearch="circle"
      @clickrectanglesearch="rectangle"
      @clickcancel="hide"
      @changeLine="changeLine"
      @changePrefecture="changePrefecture"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Dialog from '@/components/molecules/dialog';
import SearchCondition from '@/components/organisms/search-condition';
import AreaItem from '@/interfaces/area-item';
import SelectItem from '@/interfaces/select';
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
          lines: this.lines,
          stations: this.stations,
          currentLineId: 0,
          fromStationId: 0,
          toStationId: 0,
          walkMin: 0,
          walkMax: 0,
          busMin: 0,
          busMax: 0,
        }];
  areas: AreaItem[] = [{
          prefectures: this.prefectures,
          municipalities: this.municipalities,
          currentPrefectureId: 0,
          currentMunicipalityId: 0,
        }];
  get lines(): SelectItem[] {
    const v = this.$store.state.conditions.lines;
    return v ? v : [{ value: 0, label: '' }];
  }
  get stations(): SelectItem[] {
    const v = this.$store.state.conditions.stations;
    return v ? v : [{ value: 0, label: '' }];
  }
  get prefectures(): SelectItem[] {
    const v = this.$store.state.conditions.prefectures;
    return v ? v : [{ value: 0, label: '' }];
  }
  get municipalities(): SelectItem[] {
    const v = this.$store.state.conditions.municipalities;
    return v ? v : [{ value: 0, label: '' }];
  }
  changeLine(lineId: number): void {
    this.$store.dispatch('conditions/stations', lineId);
  }
  changePrefecture(prefectureId: number): void {
    this.$store.dispatch('conditions/municipalities', prefectureId);
  }
  addTransportation(): void {
    this.transportations.push({
      lines: this.lines,
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
  addArea(): void {
    this.areas.push({
      prefectures: this.prefectures,
      municipalities: [{ value: 0, label: '' }],
      currentPrefectureId: 0,
      currentMunicipalityId: 0,
    });
  }
  deleteArea(index: number): void {
    if (index < 0 || this.areas.length <= index) { return; }
    this.areas.splice(index, 1);
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
