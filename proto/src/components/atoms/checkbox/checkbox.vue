<template>
  <label class="label">
    <input type="checkbox" class="checkbox">
    <span class="squarebox"></span><span class="text"><slot></slot></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 't-checkbox'
})
</script>

<style lang="stylus" scoped>
.label
  display: block
  width: 100%
  height: 100%
  cursor: pointer
  user-select: none

.squarebox
  display: inline-block
  position: relative
  width: 20px
  height: 20px
  top: 5px
  border: 1px solid #d3d3d3
  border-radius: 4px
  background: #fcfff4

.squarebox:after
  position: absolute
  content: ''
  width: 10px
  height: 6px
  top: 5px
  left: 4px
  border: 3px solid #888
  border-top: none
  border-right: none
  background: transparent
  -webkit-transform: rotate(-45deg)
  transform: rotate(-45deg)
  opacity: 0

.squarebox + .text
  margin-left: 10px
  background: transparent
  color: rgba(0,0,0,0.65)
  font-size: 14px
  font-size: 1.4rem

.checkbox
  visibility: hidden
  width: 0px

.checkbox:checked + .squarebox:after
  opacity: 1
</style>
