<template>
  <div class="settings-inner-container">
    <form :name="`form-${name}`" ref="form">
      <component :is="content" class="menu-container" />
      <div class="button-container flex flex-center">
        <TButton @onclick="click">設定する</TButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SBalloon from './settings-balloon'
import SCSV from './settings-csv'
import SForms from './settings-forms'
import SList from './settings-list'
import SRange from './settings-range'
import TButton from '@/components/atoms/button'

enum Menu {
  Ballon = 1,
  CSV,
  Forms,
  List,
  Range,
}

export default Vue.extend({
  name: 'settings',
  components: {
    TButton,
    SBalloon,
    SCSV,
    SForms,
    SList,
    SRange
  },
  props: {
    name: {
      type: Number,
      required: true
    }
  },
  computed: {
    content() {
      switch (this.name) {
        case Menu.Ballon:
          return SBalloon
        case Menu.CSV:
          return SCSV
        case Menu.Forms:
          return SForms
        case Menu.List:
          return SList
        case Menu.Range:
          return SRange
        default:
          throw new Error(`An invalid value was passed. val: ${name}`);
      }
    }
  },
  methods: {
    click (evt: MouseEvent): void {
      console.log(evt)
      console.log(this.$refs.form.name)
      evt.preventDefault()
    }
  }
})
</script>

<style lang="stylus" scoped>
.settings-inner-container
  width 100%
  height 100%

.menu-container
  width 100%
  padding 10px

.button-container
  width 100%
  height 60px
</style>
