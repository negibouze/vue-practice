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
              <div>交通</div>
              <div>
                <ul class="no-bullet">
                  <li>
                    <span>路線</span>
                    <span>開始駅</span>
                    <span>終了駅</span>
                  </li>
                  <li>
                    <span>駅徒歩分</span>
                    <span>MIN</span>
                    <span>MAX</span>
                    <div>
                      <t-checkbox>バス乗車時間を含む</t-checkbox>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </fieldset>
      </form>
    </div>
    <div class="button-container flex flex-between">
      <TButton @onclick="circle">円検索</TButton>
      <TButton @onclick="rectangle">四角検索</TButton>
      <TButton @onclick="hide">閉じる</TButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import { Prop } from 'vue/types/options'
import Component from 'vue-class-component';
import TButton from '@/components/atoms/button';
import TCheckbox from '@/components/atoms/checkbox';
import TSelect from '@/components/atoms/select';
import CheckboxGroup from '@/components/molecules/checkbox-group';
import DateRange from '@/components/molecules/date-range';
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
    TSelect,
    CheckboxGroup,
    DateRange,
    SelectRange,
  }
})
export default class MordalSearchCondition extends MordalSearchConditionProps {
  circle(e: MouseEvent): void {
    this.$emit('onclickcirclesearch', this.$refs.form)
  }
  rectangle(e: MouseEvent): void {
    this.$emit('onclickrectanglesearch', this.$refs.form)
  }
  hide(e: MouseEvent): void {
    this.$emit('onclickcancel', e)
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
