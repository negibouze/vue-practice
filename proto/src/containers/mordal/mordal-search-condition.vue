<template>
  <Dialog
    :visible="visible"
    @clickbackground="hide"
  >
    <SearchCondition
      :condition="condition"
      @clickAddTransportation="addTransportation"
      @clickDeleteTransportation="deleteTransportation"
      @clickAddArea="addArea"
      @clickDeleteArea="deleteArea"
      @clickCircleSearch="circle"
      @clickRectangleSearch="rectangle"
      @clickCancel="hide"
      @clickLoad="load"
    />
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Dialog from '@/components/molecules/dialog';
import SearchCondition from '@/components/organisms/search-condition';
import SelectItem from '@/interfaces/select';
import SearchCondition from '@/interfaces/user-settings/search-condition';

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
  // computed
  get condition(): SearchCondition {
    const c = this.$store.state.condition.condition;
    return c ? c : {};
  }
  // method
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
    console.log(form)
    this.$store.dispatch('condition/update', {}).then(() => {
      this.hide();
      this.$store.dispatch('circle/begin');
    });
  }
  rectangle(form: HTMLFormElement): void {
    this.$store.dispatch('condition/update', {}).then(() => {
      this.hide();
    });
  }
  hide(): void {
    this.$store.dispatch('condition/invisible');
    this._discard(this.transportations);
    this._discard(this.areas);
  }
  _discard(obj) {
    obj.splice(0, obj.length);
    obj.push({});
  }
  load(): void {
    this.$store.dispatch('condition/load');
  }
}
</script>
