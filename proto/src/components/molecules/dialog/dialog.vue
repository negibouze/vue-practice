<template>
  <div
    v-show="visible"
    class="dialog-wrapper"
  >
    <div
      :style="{ 'z-index': zIndex+2 }"
      class="box-outer"
      :class="[
        draggable ? 'suitable' : 'center'
      ]"
      ref="item"
    >
      <slot></slot>
    </div>
    <Overlay
      v-if="background"
      :visible.sync="overlay"
      :window="true"
      :theme="backgroundTheme"
      :zIndex="zIndex"
      @click="handleClickOverlay"
    >
    </Overlay>
    <div
      v-if="draggable"
      :style="{ 'z-index': zIndex+1 }"
      class="draggable-container"
      :class="{ active: dragging }"
      ref="container"
      @click="dragEnd"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Overlay from '@/components/atoms/overlay'
 
const DialogProps = Vue.extend({
  props: {
    draggable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10
    },
    background: {
      type: Boolean,
      default: true
    },
    backgroundTheme: {
      type: String,
      default: 'dark'
    },
  }
})
@Component({
  components: {
    Overlay,
  },
})

export default class Dialog extends DialogProps {
  // inital data
  dragging: boolean = false
  initialX: number = 0
  initialY: number = 0
  currentX: number = 0
  currentY: number = 0
  offsetX: number = 0
  offsetY: number = 0
  // lifecycle hook
  mounted() {
    if (this.draggable) {
      this._addListenerMulti(this.$refs.item, ['touchstart', 'mousedown'], this.dragStart)
    }
  }
  destroyed() {
    if (this.draggable && !!this.$refs.item) {
      this._removeListenerMulti(this.$refs.item, ['touchstart', 'mousedown'], this.dragStart)
    }
  }
  // computed
  get overlay (): boolean {
    return this.visible && this.background
  }
  // method
  dragStart(e: Event): void {
    this.dragging = true
    if (e instanceof TouchEvent) {
      this.initialX = e.touches[0].clientX - this.offsetX
      this.initialY = e.touches[0].clientY - this.offsetY
      this.$refs.item.addEventListener('touchend', this.dragEnd)
      this.$refs.item.addEventListener('touchmove', this.drag)
    } else if (e instanceof MouseEvent) {
      this.initialX = e.clientX - this.offsetX
      this.initialY = e.clientY - this.offsetY
      this.$refs.item.addEventListener('mouseup', this.dragEnd)
      this.$refs.item.addEventListener('mousemove', this.drag)
    } else {
      throw new Error('unexpected event')
    }
  }
  dragEnd(e: Event): void {
    if (e instanceof TouchEvent) {
      this.$refs.item.removeEventListener('touchend', this.dragEnd)
      this.$refs.item.removeEventListener('touchmove', this.drag)
    } else if (e instanceof MouseEvent) {
      this.$refs.item.removeEventListener('mouseup', this.dragEnd)
      this.$refs.item.removeEventListener('mousemove', this.drag)
    } else {
      throw new Error('unexpected event')
    }
    this.dragging = false
  }
  drag(e: Event): void {
    if (e instanceof TouchEvent) {
      this.currentX = e.touches[0].clientX - this.initialX
      this.currentY = e.touches[0].clientY - this.initialY
    } else if (e instanceof MouseEvent) {
      this.currentX = e.clientX - this.initialX
      this.currentY = e.clientY - this.initialY
    } else {
      throw new Error('unexpected event')
    }
    this.offsetX = this.currentX
    this.offsetY = this.currentY

    this.setTranslate(this.currentX, this.currentY, this.$refs.item)
  }
  setTranslate (xPos: number, yPos: number, el: HTMLElement) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`
  }

  handleClickOverlay(e: MouseEvent): void {
    this.$emit('clickbackground', e)
  }
  _addListenerMulti(el: HTMLElement, eventName: string[], fn: (e: Event) => void) {
    eventName.forEach(e => el.addEventListener(e, fn, false));
  }
  _removeListenerMulti(el: HTMLElement, eventName: string[], fn: (e: Event) => void) {
    eventName.forEach(e => el.removeEventListener(e, fn, false));
  }
  // dynamic component
  $refs!: {
    container: HTMLElement,
    item: HTMLElement,
  }
}
</script>

<style lang="stylus" scoped>
.dialog-wrapper
  position: relative

.box-outer
  position: fixed

.suitable
  top: 25vh
  left: 25vw

.center
  top: 50%
  left: 50%
  transform: translate3d(-50%, -50%, 0)

.draggable-container
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background-color: rgba(0, 0, 0, 0)
  visibility: hidden
  &.active
    visibility: visible

</style>
