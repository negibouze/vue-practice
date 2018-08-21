<template>
  <div class="area" :id="id" ref="outside">
    <div class="area-main">
      <div class="item-block flex">
        <span class="item-title flex-item">都道府県</span>
        <div class="item-body flex-item">
          <t-select
            :options="prefectures"
            :selectedValue="currentPrefecture"
            :fit-parent="true"
            @change="changePrefecture"
          />
        </div>
        <span class="item-title flex-item">市区町村</span>
        <div class="item-body flex-item">
          <t-select
            :options="municipalities"
            :selectedValue="currentMunicipality"
            :fit-parent="true"
            @change="changeMunicipality"
          />
        </div>
        <div class="area-button">
          <t-button @click="clickDelete" circle v-if="isDelete">×</t-button>
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
import SelectItem from '@/interfaces/select';

const AreaProps = Vue.extend({
  props: {
    id: String,
    isDelete: Boolean,
    prefectures:  {
      type: Array as Prop<SelectItem[]>,
      required: true
    },
    municipalities:  {
      type: Array as Prop<SelectItem[]>,
      required: true
    },
    currentPrefecture: [Number, String],
    currentMunicipality: [Number, String],
  }
})
@Component({
  components: {
    TButton,
    TSelect,
  }
})
export default class Area extends AreaProps {
  changePrefecture(prefectureId: number): void {
    this.$emit('changePrefecture', prefectureId);
  }
  changeMunicipality(municipalityId: number): void {
    this.$emit('changeMunicipality', municipalityId);
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

.area
  height: 62px
  width: 100%
  padding: 6px 0
  &:not(:first-child)
    margin: 3px 0
    border-top: solid 2px #ddd

.area-button
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
    height: 62px
  100%
    opacity: 1
    height: 62px

@keyframes fadeout
  0%
    opacity: 1
    height: 62px
    margin: 3px 0
    padding: 6px 0
  40%
    opacity: 0
    height: 62px
  100%
    opacity: 0
    height: 0
    margin: 0
    padding: 0
</style>
