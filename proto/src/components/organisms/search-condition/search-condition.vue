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
            <div v-for="(item, index) in transportations"
              :key="`transportation-inner-${index}`"
              :class="{ fadein: 1 <= index }"
              class="flex transportation-inner"
              :id="`transportation-inner-${index}`"
            >
              <div class="transportation-inner-main">
                <div class="item-block flex">
                  <span class="item-title">路線</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.lines"
                      :selectedValue="item.currentLineId"
                    />
                  </div>
                </div>
                <div class="item-block flex">
                  <span class="item-title flex-item">開始駅</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.stations"
                      :selectedValue="item.fromStationId"
                    />
                  </div>
                  <span class="item-title flex-item">終了駅</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.stations"
                      :selectedValue="item.toStationId"
                    />
                  </div>
                </div>
                <div class="item-block flex">
                  <span class="item-title flex-item">徒歩分数</span>
                  <div class="item-body flex-item">
                    <number-range
                      :leftProps="{ currentValue: item.walkMin }"
                      :rightProps="{ currentValue: item.walkMax }"
                      size="xsmall"
                    />
                  </div>
                  <span class="item-title flex-item">バス分数</span>
                  <div class="item-body flex-item">
                    <number-range
                      :leftProps="{ currentValue: item.busMin }"
                      :rightProps="{ currentValue: item.busMax }"
                      size="xsmall"
                    />
                  </div>
                </div>
              </div>
              <div class="transportation-inner-button" v-if="1 <= index">
                <t-button @click="deleteTransportation(index)" circle>×</t-button>
              </div>
            </div>
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
import NumberRange from '@/components/molecules/number-range';
import SelectRange from '@/components/molecules/select-range';
import TransportationItem from '@/interfaces/transportation-item';

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
    NumberRange,
    SelectRange,
  }
})
export default class MordalSearchCondition extends MordalSearchConditionProps {
  maxNumOfTransportations: number = 10;
  addTransportation(): void {
    this.$emit('clickAddTransportation', this.$refs.form);
  }
  deleteTransportation(index: number): void {
    const obj = document.getElementById(`transportation-inner-${index}`);
    if (!!obj) {
      obj.classList.remove('fadein');
      obj.classList.add('fadeout');
      // アニメーションが1000msなので1000ms後にemitする（動作保証ができないので'animationend'は使わない）
      setTimeout(() => {
        this.$emit('clickDeleteTransportation', index);
        obj.classList.remove('fadeout');
      }, 500);
    }
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
  $refs!: {
    form: HTMLFormElement
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styls/colors'
@import '~@/styls/functions'
@import '~@/styls/sizes'

animation(name)
  animation-name: name
  animation-duration: .6s 
  animation-fill-mode: both
  animation-timing-function: ease-in-out

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

.transportation-inner
  width: 100%
  margin: 5px 0
.transportation-inner-main
  flex-grow: 1
.transportation-inner-button
  flex-grow: 0
  flex-basis: 80px
  min-width: 80px

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
    height: 150px
  100%
    opacity: 1
    height: 150px

@keyframes fadeout
  0%
    opacity: 1
    height: 150px
  40%
    opacity: 0
    height: 150px
  100%
    opacity: 0
    height: 0
</style>
