<template>
  <div class="mordal-search-condition">
    <div class="content scrollable-y">
      <span class="content-title-block content-title">検索条件</span>
      <form ref="form">
        <fieldset>
          <legend class="section-title">建物種別</legend>
          <div class="section-body">
            <checkbox-group
              :name="'building-type'"
              :items="items.stage"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend class="section-title">販売年月</legend>
          <div class="section-body">
            <date-range />
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
              @changeLine="changeLine"
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
              @changePrefecture="changePrefecture"
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
            <t-input
              placeholder="物件名"
            >
              <t-select
                slot="append"
                :options="items.scope"
                class="input-append"
              />
            </t-input>
          </div>
        </fieldset>
        <fieldset>
          <legend class="section-title">総戸数</legend>
          <div class="section-body">
            <select-range
              :options="items.test"
            />
          </div>
          <!-- 以上〜以下/未満 -->
        </fieldset>
      </form>
    </div>
    <div class="button-container flex flex-between">
      <t-button @click="circle">円検索</t-button>
      <t-button @click="rectangle">四角検索</t-button>
      <t-button @click="hide">閉じる</t-button>
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
import TSelect from '@/components/atoms/select';
import CheckboxGroup from '@/components/molecules/checkbox-group';
import DateRange from '@/components/molecules/date-range';
import SelectRange from '@/components/molecules/select-range';
import { TransportationContainer, AreaContainer } from '@/containers/mordal/search-condition';
import TransportationItem from '@/interfaces/transportation-item';
import AreaItem from '@/interfaces/area-item';

const MordalSearchConditionProps = Vue.extend({
  props: {
    items: {
      type: Object,
      default: () => {
        return {
          stage: [
            { value: 0, id: 'development', label: '開発段階', checked: true },
            { value: 1, id: 'plans', label: '予定段階' },
            { value: 2, id: 'sale', label: '分譲段階', checked: false },
          ],
          test: [
            { value: 50, label: '50' },
            { value: 100, label: '100' },
            { value: 200, label: '200' },
          ],
          scope: [
            { value: 0, label: '全ての語を含む' },
            { value: 1, label: '何れかの語を含む' },
            { value: 2, label: '何れの語も含まない' },
          ],
        }
      }
    },
    transportations: {
      type: Array as Prop<TransportationItem[]>,
      required: true,
    },
    areas: {
      type: Array as Prop<AreaItem[]>,
      required: true,
    },
  }
})
@Component({
  components: {
    TButton,
    TCheckbox,
    TInput,
    TInputNumber,
    TSelect,
    CheckboxGroup,
    DateRange,
    SelectRange,
    AreaContainer,
    TransportationContainer,
  }
})
export default class MordalSearchCondition extends MordalSearchConditionProps {
  maxNumOfTransportations: number = 10;
  maxNumOfAreas: number = 20;
  addTransportation(): void {
    this.$emit('clickAddTransportation', this.$refs.form);
  }
  deleteTransportation(index: number): void {
    this.$emit('clickDeleteTransportation', index);
  }
  addArea(): void {
    this.$emit('clickAddArea', this.$refs.form);
  }
  deleteArea(index: number): void {
    this.$emit('clickDeleteArea', index);
  }
  circle(e: MouseEvent): void {
    this.$emit('clickcirclesearch', this.$refs.form);
  }
  rectangle(e: MouseEvent): void {
    this.$emit('clickrectanglesearch', this.$refs.form);
  }
  hide(e: MouseEvent): void {
    this.$emit('clickcancel', e);
  }
  changeLine(id: Number): void {
    this.$emit('changeLine', id);
  }
  changePrefecture(id: Number): void {
    this.$emit('changePrefecture', id);
  }
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
.input-append
  width: 180px
  min-width: 180px
</style>
