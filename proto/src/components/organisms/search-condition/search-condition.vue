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
            <div class="">
              <div>
                <span>交通</span>
                <t-button @click="add" round>+</t-button>
              </div>
              <div>
                <div>
                  <span>路線</span>
                  <t-select
                    :options="items.test"
                  />
                </div>
                <div>
                  <span>開始駅</span>
                  <t-select
                    :options="items.test"
                  />
                  <span>終了駅</span>
                  <t-select
                    :options="items.test"
                  />
                </div>
                <div>
                  <span>徒歩分数</span>
                  <number-range
                    :leftProps="{ currentValue: 5 }"
                    :rightProps="{ currentValue: 15 }"
                  />
                </div>
                <div>
                  <span>バス分数</span>
                  <number-range
                  />
                </div>
              </div>
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
// import { Prop } from 'vue/types/options'
import Component from 'vue-class-component';
import TButton from '@/components/atoms/button';
import TCheckbox from '@/components/atoms/checkbox';
import { TInput, TInputNumber } from '@/components/atoms/input';
import TSelect from '@/components/atoms/select';
import CheckboxGroup from '@/components/molecules/checkbox-group';
import DateRange from '@/components/molecules/date-range';
import NumberRange from '@/components/molecules/number-range';
import SelectRange from '@/components/molecules/select-range';

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
          ]
        }
      }
    },
    selectedkey: {
      type: [String, Number]
    }
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
  add(): void {

  }
  circle(e: MouseEvent): void {
    this.$emit('clickcirclesearch', this.$refs.form)
  }
  rectangle(e: MouseEvent): void {
    this.$emit('clickrectanglesearch', this.$refs.form)
  }
  hide(e: MouseEvent): void {
    this.$emit('clickcancel', e)
  }
  $refs!: {
    form: HTMLFormElement
  }
}
</script>

<style lang="stylus" scoped>
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
</style>
