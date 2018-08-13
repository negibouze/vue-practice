<template>
  <div class="mordal-search-condition scrollable-y">
    <div class="content">
      <form ref="form">
        <fieldset>
          <legend>検索条件</legend>
            <div class="">
              <span class="">建物種別</span>
              <checkbox-group
                :name="'building-type'"
                :items="items.stage"
              />
            </div>
            <div class="">
              <span class="">販売年月</span>
              <date-range />
            </div>
            <div class="transportation">
              <div>
                <span>交通</span>
                <t-button
                  :disabled="maxNumOfTransportations <= transportations.length"
                  @click="addTransportation"
                  round
                >
                +
                </t-button>
              </div>
              <div v-for="(item, index) in transportations"
                :key="`transportation-inner-${index}`"
                :class="{ fadein: 1 <= index }"
                class="flex transportation-inner"
                :id="`transportation-inner-${index}`"
              >
                <div class="transportation-inner-main">
                  <div>
                    <span>路線</span>
                    <t-select
                      :options="item.lines"
                      :selectedValue="item.currentLineId"
                    />
                  </div>
                  <div>
                    <span>開始駅</span>
                    <t-select
                      :options="item.stations"
                      :selectedValue="item.fromStationId"
                    />
                    <span>終了駅</span>
                    <t-select
                      :options="item.stations"
                      :selectedValue="item.toStationId"
                    />
                  </div>
                  <div>
                    <span>徒歩分数</span>
                    <number-range
                      :leftProps="{ currentValue: item.walkMin }"
                      :rightProps="{ currentValue: item.walkMax }"
                    />
                  </div>
                  <div>
                    <span>バス分数</span>
                    <number-range
                      :leftProps="{ currentValue: item.busMin }"
                      :rightProps="{ currentValue: item.busMax }"
                    />
                  </div>
                </div>
                <div class="transportation-inner-button" v-if="1 <= index">
                  <t-button @click="deleteTransportation(index)" round>×</t-button>
                </div>
              </div>
            </div>
            <div class="">
              <span class="">市区町村</span>
            </div>
            <div class="">
              <span class="">物件名</span>
              <t-input
                placeholder="物件名"
              >
                <t-select
                  slot="append"
                  :options="items.scope"
                />
              </t-input>
            </div>
            <div class="">
              <span class="">総戸数</span>
              <select-range
                :options="items.test"
              />
              <!-- 以上〜以下/未満 -->
            </div>
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
animation(name)
  animation-name: name
  animation-duration: .5s 
  animation-fill-mode: both
  animation-timing-function: ease-in-out

.mordal-search-condition
  width: 60%
  min-width: 640px
  max-height: 95vh
  border-radius: 8px
  background-color: #cfcfcf

.content
  padding: 10px

.button-container
  width: 100%
  padding: 10px

.transportation-inner
  width: 100%
.transportation-inner-main
  flex-grow: 1
.transportation-inner-button
  flex-grow: 0
  flex-basis: 80px
  min-width: 80px

.fadein
  animation(fadein)
.fadeout
  animation(fadeout)

@keyframes fadein
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes fadeout
  0%
    opacity: 1
  100%
    opacity: 0
</style>
