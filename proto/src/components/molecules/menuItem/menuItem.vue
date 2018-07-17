<template>
  <div class="menu-item-container flex">
    <span class="icon" :class="[ isIconHidden ? hide : show ]"><img :src="`assets/images/${ icon }.svg`"></span>
    <span class="label" :class="[ isLabelHidden ? hide : show ]">{{ label }}</span>
  </div>          
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'menu-item',
  data () {
    return {
      show: 'show',
      hide: 'hide'
    }
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    hideIcon: {
      type: Boolean,
      default: false
    },
    hideLabel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isIconHidden(): boolean {
      return !(!!this.icon) || this.hideIcon
    },
    isLabelHidden(): boolean {
      return !(!!this.label) || this.hideLabel
    }
  },
  methods: {
  }
})
</script>

<style lang="stylus" scoped>
.menu-item-container
  width: 100%
  height: 100%
  padding-left: 17px

.icon
  position: relative
  width: 30px
  opacity: 1.0
  > img
    position: absolute
    top: calc(50% - 8px)
    width: 16px
    height: 16px

.label
  transition: all 100ms ease-in-out

.show
  visibility: visible
  opacity: 1.0

.hide
  visibility: hidden
  opacity: 0

</style>
