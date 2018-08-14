<template>
  <el-button
    :type="type"
    :size="size"
    :icon="icon"
    :nativeType="nativeType"
    :loading="loading"
    :disabled="disabled"
    :plain="plain"
    :autofocus="autofocus"
    :round="round"
    :circle="circle"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Button as ElButton } from 'element-ui';

const ButtonProps = Vue.extend({
  props: {
    type: String,
    size: String,
    icon: String,
    nativeType: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  }
})
@Component({
  components: {
    ElButton,
  },
})
export default class TButton extends ButtonProps {
  handleClick (e: MouseEvent): void {
    this.$emit('click', e);
  }
}
</script>

<style lang="stylus" scoped>
.el-button--wide
  padding: 12px 60px
.el-button--xwide
  padding: 12px 120px
.el-button--xxwide
  padding: 12px 180px
.el-button--large
  padding: 16px 60px
.el-button--xlarge
  padding: 16px 120px
.el-button--xxlarge
  padding: 16px 180px
</style>
