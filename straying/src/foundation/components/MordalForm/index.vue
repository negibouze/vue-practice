<template>
  <div class="mordal-form">
    <div id="svg-wrapper">
      <img src="" alt="svg" id="svg">
    </div>
    <div class="button-container">
      <ButtonTest title="閉じる" :onClick="hide"></ButtonTest>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ButtonTest from '../ButtonTest'

export default {
  name: 'MordalForm',
  components: {
    ButtonTest
  },
  computed: {
    ...mapState('form', {
      dom: state => state.dom
    })
  },
  methods: {
    svgFromString(svgString) {
      const parser = new DOMParser()
      return parser.parseFromString(svgString, "image/svg+xml")
    },
    setSVGToSrc(targetId, svgNode){
      const xml = (new XMLSerializer).serializeToString(svgNode);
      document.getElementById(targetId).src = "data:image/svg+xml;charset=utf-8,"+xml;
    },
    ...mapActions('mordal', [
      'hide'
    ]),    
  },
  mounted() {
    this.setSVGToSrc('svg', this.svgFromString(this.dom));
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
