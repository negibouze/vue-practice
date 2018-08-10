<template>
  <el-input
    
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Input as ElInput } from 'element-ui';

const InputProps = Vue.extend({
  props: {
  }
})
@Component({
  components: {
    ElInput,
  },
})
export default class TInput extends InputProps {
}
</script>

<style lang="stylus" scoped>
</style>
