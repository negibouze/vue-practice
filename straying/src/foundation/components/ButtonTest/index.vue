<template>
  <div class="test">
    <button class="example" @click="onClick">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonTest",
  props: {
    title: {
      type: String,
      require: true
    },
    onClick: {
      type: Function
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './Style'
</style>
