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
              class="transportation-inner"
              :id="`transportation-inner-${index}`"
            >
              <div class="transportation-inner-main">
                <div class="item-block flex">
                  <span class="item-title">路線</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.lines"
                      :selectedValue="item.currentLineId"
                      :fit-parent="true"
                    />
                  </div>
                  <div class="transportation-inner-button">
                    <t-button @click="deleteTransportation(index)" circle v-if="1 <= index">×</t-button>
                  </div>
                </div>
                <div class="item-block flex">
                  <span class="item-title flex-item">開始駅</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.stations"
                      :selectedValue="item.fromStationId"
                      :fit-parent="true"
                    />
                  </div>
                  <span class="item-title flex-item">終了駅</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.stations"
                      :selectedValue="item.toStationId"
                      :fit-parent="true"
                    />
                  </div>
                </div>
                <div class="item-block flex">
                  <span class="item-title flex-item">徒歩分数</span>
                  <div class="item-body flex-item">
                    <number-range
                      :leftProps="minutesOption(item.walkMin)"
                      :rightProps="minutesOption(item.walkMax)"
                      size="xsmall"
                    />
                  </div>
                  <span class="item-title flex-item">バス分数</span>
                  <div class="item-body flex-item">
                    <number-range
                      :leftProps="minutesOption(item.busMin)"
                      :rightProps="minutesOption(item.busMax)"
                      size="xsmall"
                    />
                  </div>
                </div>
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
            <div v-for="(item, index) in municipalities"
              :key="`municipality-inner-${index}`"
              :class="{ fadein: 1 <= index }"
              class="municipality-inner"
              :id="`municipality-inner-${index}`"
            >
              <div class="municipality-inner-main">
                <div class="item-block flex">
                  <span class="item-title flex-item">都道府県</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.prefectures"
                      :selectedValue="item.currentPrefectureId"
                      :fit-parent="true"
                    />
                  </div>
                  <span class="item-title flex-item">市区町村</span>
                  <div class="item-body flex-item">
                    <t-select
                      :options="item.municipalities"
                      :selectedValue="item.currentMunicipalityId"
                      :fit-parent="true"
                    />
                  </div>
                  <div class="municipality-inner-button">
                    <t-button @click="deleteMunicipality(index)" circle v-if="1 <= index">×</t-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="button-container center">
              <t-button
                :disabled="maxNumOfMunicipalities <= municipalities.length"
                @click="addMunicipality"
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
import NumberRange from '@/components/molecules/number-range';
import SelectRange from '@/components/molecules/select-range';
import TransportationItem from '@/interfaces/transportation-item';
import MunicipalityItem from '@/interfaces/municipality-item';

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
    municipalities: {
      type: Array as Prop<MunicipalityItem[]>,
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
  maxNumOfMunicipalities: number = 20;
  minutesOption(currentValue: number): {[key: string]: number} {
    return {
      min: 0,
      max: 999,
      currentValue
    };
  } 
  addTransportation(): void {
    this.$emit('clickAddTransportation', this.$refs.form);
  }
  deleteTransportation(index: number): void {
    this._deleteObject(`transportation-inner-${index}`, index, 'clickDeleteTransportation');
  }
  addMunicipality(): void {
    this.$emit('clickAddMunicipality', this.$refs.form);
  }
  deleteMunicipality(index: number): void {
    this._deleteObject(`municipality-inner-${index}`, index, 'clickDeleteMunicipality');
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
  _deleteObject(id: string, index: number, emit: string) {
    const obj = document.getElementById(id);
    if (!!obj) {
      obj.classList.remove('fadein');
      obj.classList.add('fadeout');
      // アニメーションが600msなので600ms後にemitする（動作保証ができないので'animationend'は使わない）
      setTimeout(() => {
        this.$emit(emit, index);
        obj.classList.remove('fadeout');
      }, 600);
    }
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
  animation-timing-function: ease-out

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
  height: 154px
.municipality-inner
  height: 62px

.transportation-inner
.municipality-inner
  width: 100%
  padding: 6px 0
  &:not(:first-child)
    margin: 3px 0
    border-top: solid 2px #ddd

.transportation-inner-button
.municipality-inner-button
  width: 40px
  height: 40px

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
.input-append
  width: 180px
  min-width: 180px

.fadein
  animation(fadein)
.fadeout
  animation(fadeout)

@keyframes fadein
  0%
    opacity: 0
    height: 0
  // 60%
  //   opacity: 0
  //   height: 100%
  100%
    opacity: 1
    height: 100%

@keyframes fadeout
  0%
    opacity: 1
    height: 100%
    margin: 3px 0
    padding: 6px 0
  // 40%
  //   opacity: 0
  //   height: 100%
  100%
    opacity: 0
    height: 0
    margin: 0
    padding: 0
</style>
