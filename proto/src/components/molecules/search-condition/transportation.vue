<template>
  <div class="transportation" :id="id" ref="outside">
    <div class="transportation-main">
      <div class="item-block flex">
        <span class="item-title">路線</span>
        <div class="item-body flex-item">
          <t-select
            :options="lines"
            :selectedValue="currentLine"
            :fit-parent="true"
            @change="changeLine"
          />
        </div>
        <div class="transportation-button">
          <t-button @click="clickDelete" circle v-if="isDelete">×</t-button>
        </div>
      </div>
      <div class="item-block flex">
        <span class="item-title flex-item">開始駅</span>
        <div class="item-body flex-item">
          <t-select
            :options="stations"
            :disabled="disabled"
            :selectedValue="fromStation"
            :fit-parent="true"
            @change="changeFromStation"
          />
        </div>
        <span class="item-title flex-item">終了駅</span>
        <div class="item-body flex-item">
          <t-select
            :options="stations"
            :disabled="disabled"
            :selectedValue="toStation"
            :fit-parent="true"
            @change="changeToStation"
          />
        </div>
      </div>
      <div class="item-block flex">
        <span class="item-title flex-item">徒歩分数</span>
        <div class="item-body flex-item">
          <number-range
            :leftProps="minutesOption(walkMin)"
            :rightProps="minutesOption(walkMax)"
            size="xsmall"
            @changeLeft="(v) => { change('walkMin', v) }"
            @changeRight="(v) => { change('walkMax', v) }"
          />
        </div>
        <span class="item-title flex-item">バス分数</span>
        <div class="item-body flex-item">
          <number-range
            :leftProps="minutesOption(busMin)"
            :rightProps="minutesOption(busMax)"
            size="xsmall"
            @changeLeft="(v) => { change('busMin', v) }"
            @changeRight="(v) => { change('busMax', v) }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import TButton from '@/components/atoms/button';
import TSelect from '@/components/atoms/select';
import NumberRange from '@/components/molecules/number-range';
import SelectItem from '@/interfaces/select';

const TransportationProps = Vue.extend({
  props: {
    id: String,
    isDelete: Boolean,
    lines:  {
      type: Array as Prop<SelectItem[]>,
      required: true
    },
    stations:  {
      type: Array as Prop<SelectItem[]>,
      required: true
    },
    currentLine: [Number, String],
    fromStation: [Number, String],
    toStation: [Number, String],
    walkMin: {
      type: Number,
      default: 0
    },
    walkMax: {
      type: Number,
      default: 0
    },
    busMin: {
      type: Number,
      default: 0
    },
    busMax: {
      type: Number,
      default: 0
    },
  }
})
@Component({
  components: {
    TButton,
    TSelect,
    NumberRange,
  }
})
export default class Transportation extends TransportationProps {
  // computed
  get disabled() {
    return !this.stations || this.stations.length <= 0
  }
  // method
  minutesOption(currentValue: number): {[key: string]: number} {
    return {
      min: 0,
      max: 999,
      currentValue,
    };
  }
  changeLine(lineId: number): void {
    this.$emit('changeLine', lineId);
  }
  changeFromStation(stationId: number): void {
    this.$emit('changeFromStation', stationId);
  }
  changeToStation(stationId: number): void {
    this.$emit('changeToStation', stationId);
  }
  change(name: string, value: string|number): void {
    this.$emit('changeCondition', name, value);
  }
  clickDelete(e: MouseEvent): void {
    const obj = this.$refs.outside;
    if (!!obj) {
      obj.classList.remove('fadein');
      obj.classList.add('fadeout');
      // アニメーションが600msなので600ms後にemitする（動作保証ができないので'animationend'は使わない）
      setTimeout(() => {
        this.$emit('clickDelete', e);
        obj.classList.remove('fadeout');
      }, 600);
    }
  }
  // dynamic component
  $refs!: {
    outside: HTMLFormElement
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styls/colors'
@import '~@/styls/functions'
@import '~@/styls/sizes'

.transportation
  height: 154px
  width: 100%
  padding: 6px 0
  &:not(:first-child)
    margin: 3px 0
    border-top: solid 2px #ddd

.transportation-button
  width: 40px
  height: 40px

.item-block
  padding: 5px 0
.item-title
  display: inline-block
  width: 80px
  fontSize($font-size-medium-pc)
  &.flex-item
    flex-grow: 0
.item-body
  padding: 0 15px
  &.flex-item
    flex-grow: 1

.fadein
  animation(fadein)
.fadeout
  animation(fadeout)

@keyframes fadein
  0%
    opacity: 0
    height: 0
  60%
    opacity: 0
    height: 154px
  100%
    opacity: 1
    height: 154px

@keyframes fadeout
  0%
    opacity: 1
    height: 154px
    margin: 3px 0
    padding: 6px 0
  40%
    opacity: 0
    height: 154px
  100%
    opacity: 0
    height: 0
    margin: 0
    padding: 0
</style>
