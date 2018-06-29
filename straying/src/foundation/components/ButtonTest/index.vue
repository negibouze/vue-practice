<template>
  <button class="btn-normal" @click="onClick">{{ title }}</button>
</template>

<script>
export default {
  name: "button-test",
  props: {
    title: {
      type: String,
      required: true
    },
    onClick: {
      type: Function
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
