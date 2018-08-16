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
  transportations: TransportationItem[] = [{}];
  areas: AreaItem[] = [{}];
  get lines(): SelectItem[] {
    return this.$store.state.conditions.lines;
  }
  get prefectures(): SelectItem[] {
    return this.$store.state.conditions.prefectures;
  }
  addTransportation(): void {
    this.transportations.push({});
  }
  deleteTransportation(index: number): void {
    if (index < 0 || this.transportations.length <= index) { return; }
    this.transportations.splice(index, 1);
  }
  addArea(): void {
    this.areas.push({});
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
