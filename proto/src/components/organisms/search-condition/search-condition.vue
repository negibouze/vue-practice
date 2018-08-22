<template>
  <div class="mordal-search-condition">
    <div class="content scrollable-y">
      <span class="content-title-block content-title">検索条件</span>
      <form ref="form">
        <fieldset>
          <legend class="section-title">建物種別</legend>
          <div class="section-body">
            <checkbox-group
              :name="'stageStatus'"
              :items="items.stage"
              :is-flat="true"
              :checked-values="stageStatus"
              @change="(v, checked) => { changeCheckTypeCondition('stageStatus', v, checked) }"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend class="section-title">販売年月</legend>
          <div class="section-body">
            <date-range
              :current-left-value="salesAt.from"
              :current-right-value="salesAt.to"
              @changeLeft="(v) => { changeFrom('salesAt', v) }"
              @changeRight="(v) => { changeTo('salesAt', v) }"
            />
          </div>
        </fieldset>
        <fieldset class="transportation">
          <legend class="section-title">交通</legend>
          <div class="section-body">
            <transportation-container v-for="(item, index) in transportations"
              :key="`transportation-inner-${index}`"
              :class="{ fadein: 1 <= index }"
              name="transportation-inner"
              :index="index"
              :item="item"
              @clickDelete="deleteTransportation"
            />
            <div class="button-container center">
              <t-button
                :disabled="maxNumOfTransportations <= transportations.length"
                @click="addTransportation"
                size="xxwide"
              >
                + 路線を追加する
              </t-button>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend class="section-title">市区町村</legend>
          <div class="section-body">
            <area-container v-for="(item, index) in areas"
              :key="`area-inner-${index}`"
              :class="{ fadein: 1 <= index }"
              name="area-inner"
              :index="index"
              :item="item"
              @clickDelete="deleteArea"
            />
            <div class="button-container center">
              <t-button
                :disabled="maxNumOfAreas <= areas.length"
                @click="addArea"
                size="xxwide"
              >
                + 市区町村を追加する
              </t-button>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend class="section-title">物件名</legend>
          <div class="section-body">
            <free-word-container
              name="name"
              placeholder="物件名"
              :current-input-value="name.searchWord"
              :current-selected-value="name.searchType"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend class="section-title">会社</legend>
          <div class="section-body">
            <free-word-container
              name="company"
              placeholder="会社"
              :current-input-value="company.searchWord"
              :current-selected-value="company.searchType"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend class="section-title">総戸数</legend>
          <div class="section-body">
            <select-range
              :options="items.test"
              :left-selected-value="unitCount.from"
              :right-selected-value="unitCount.to"
              @changeLeft="(v) => { changeFrom('unitCount', v) }"
              @changeRight="(v) => { changeTo('unitCount', v) }"
            />
          </div>
          <!-- 以上〜以下/未満 -->
        </fieldset>
      </form>
    </div>
    <div class="button-container flex flex-between">
      <t-button @click="circle" :disabled="!enableSearch">円検索</t-button>
      <t-button @click="rectangle" :disabled="!enableSearch">四角検索</t-button>
      <t-button @click="clear">条件クリア</t-button>
      <t-button @click="cancel">閉じる</t-button>
      <t-button @click="load">テスト</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import Component from 'vue-class-component';
import TButton from '@/components/atoms/button';
import TCheckbox from '@/components/atoms/checkbox';
import { TInput, TInputNumber } from '@/components/atoms/input';
import CheckboxGroup from '@/components/molecules/checkbox-group';
import DateRange from '@/components/molecules/date-range';
import SelectRange from '@/components/molecules/select-range';
import { AreaContainer, FreeWordContainer, TransportationContainer } from '@/containers/mordal/search-condition';
import ISearchCondition from '@/interfaces/user-settings/search-condition';
import ITransportation from '@/interfaces/transportation';
import IArea from '@/interfaces/user-settings/area';
import IDateRange from '@/interfaces/date-range';
import IFreeWord from '@/interfaces/free-word';
import INumberRange from '@/interfaces/number-range';

const MordalSearchConditionProps = Vue.extend({
  props: {
    items: {
      type: Object,
      default: () => {
        return {
          stage: [
            { value: 1, id: 'development', label: '開発段階' },
            { value: 2, id: 'plans', label: '予定段階' },
            { value: 3, id: 'sale', label: '分譲段階' },
          ],
          test: [
            { value: 50, label: '50' },
            { value: 100, label: '100' },
            { value: 200, label: '200' },
          ],
        }
      }
    },
    condition: {
      type: Object as Prop<ISearchCondition>,
      required: true
    },
  }
})
@Component({
  components: {
    TButton,
    TCheckbox,
    TInput,
    TInputNumber,
    CheckboxGroup,
    DateRange,
    SelectRange,
    AreaContainer,
    FreeWordContainer,
    TransportationContainer,
  },
})
export default class MordalSearchCondition extends MordalSearchConditionProps {
  // initial data
  maxNumOfTransportations: number = 10;
  maxNumOfAreas: number = 20;
  // computed
  get stageStatus(): number[] {
    return this._hasProperty('stageStatus') ? this.condition.stageStatus : [];
  }
  get transportations(): ITransportation[] {
    return this._hasProperty('transportations') ? this.condition.transportations : [{}];
  }
  get areas(): IArea[] {
    return this._hasProperty('areas') ? this.condition.areas : [{}];
  }
  get salesAt(): IDateRange {
    return this._hasProperty('salesAt') ? this.condition.salesAt : { from: null, to: null };
  }
  get name(): IFreeWord {
    return this._hasProperty('name') ? this.condition.name : { searchWord: '', searchType: 1 };
  }
  get company(): IFreeWord {
    return this._hasProperty('company') ? this.condition.company : { searchWord: '', searchType: 1 };
  }
  get unitCount(): INumberRange {
    return this._hasProperty('unitCount') ? this.condition.unitCount : { from: null, to: null };
  }
  get enableSearch(): boolean {
    return this.stageStatus && 1 <= this.stageStatus.length;
  }
  // method
  changeFrom(key: string, value: string|number): void {
    this.$emit('changeFrom', key, value);
  }
  changeTo(key: string, value: string|number): void {
    this.$emit('changeTo', key, value);
  }
  changeSearchType(key: string, value: number): void {
    this.$emit('changeSearchType', key, value);
  }
  changeCheckTypeCondition(key: string, value: string|number, checked: boolean): void {
    this.$emit('changeCheckTypeCondition', key, value, checked);
  }
  addTransportation(): void {
    this.$emit('clickAddTransportation');
  }
  deleteTransportation(index: number): void {
    this.$emit('clickDeleteTransportation', index);
  }
  addArea(): void {
    this.$emit('clickAddArea');
  }
  deleteArea(index: number): void {
    this.$emit('clickDeleteArea', index);
  }
  circle(e: MouseEvent): void {
    this.$emit('clickCircleSearch', this.$refs.form);
  }
  rectangle(e: MouseEvent): void {
    this.$emit('clickRectangleSearch', this.$refs.form);
  }
  clear(e: MouseEvent): void {
    this.$emit('clickClearCondition', e);
  }
  cancel(e: MouseEvent): void {
    this.$emit('clickCancel', e);
  }
  load(e: MouseEvent) : void {
    this.$emit('clickLoad', e);
  }
  // convenience method
  _hasProperty(name: string): boolean {
    return this.condition.hasOwnProperty(name);
  }
  // dynamic component
  $refs!: {
    form: HTMLFormElement
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styls/colors'
@import '~@/styls/sizes'

fieldset
  border: 0

.mordal-search-condition
  width: 76vw
  height: 88vh
  min-width: 768px
  border-radius: 8px
  background-color: #cfcfcf

.content
  height: calc(100% - 60px)
  padding: 10px

.button-container
  width: 100%
  height: 60px
  padding: 10px
  &.center
    text-align:center

.content-title-block
  display: inline-block
  width: 100%
  height: 40px
  line-height: 40px
  margin-bottom: 10px
  background-color: #c3c3c3
.content-title
  padding: 0 10px
  fontSize($font-size-large-pc)
  font-weight: bold
.section-title
  padding-left: 5px
  border-left: solid 3px $color-accent
  font-weight: bold
.section-body
  padding: 10px 5px 5px
</style>
