<template>
  <div class="settings-inner-container">
    <form ref="form">
      <slot class="menu-container"></slot>
      <div class="button-container flex flex-center">
        <TButton @click="handleClick">設定する</TButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TButton from '@/components/atoms/button'

const SettingsProps = Vue.extend({})
@Component({
  components: {
    TButton
  }
})
export default class Settings extends SettingsProps {
  handleClick (evt: MouseEvent): void {
    this.$emit('click', evt, this.$refs.form)
    evt.preventDefault()
  }
  $refs!: {
    form: HTMLFormElement
  }
}
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
