<template>
  <div class="container">
    <div class="table-area">
      <list-test
      />
    </div>
    <div class="button-area">
      <ButtonTest
        title="draw on canvas"
        :onClick="drawing"
      />
      <ButtonTest
        title="download pdf"
        :onClick="download"
      />
    </div>
    <div class="render-area">
      <canvas id="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jsPDF'
import ButtonTest from '../ButtonTest'
import ListTest from '../ListTest'

export default {
  name: 'Canvas',
  components: {
    ButtonTest,
    ListTest
  },
  methods: {
    drawing() {
      /* canvas要素のノードオブジェクト */
      const canvas = this.$refs.canvas;
      /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
      if (!canvas || !canvas.getContext) {
        return false;
      }
      /* 2Dコンテキスト */
      var ctx = canvas.getContext('2d');
      /* 四角を描く */
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.lineTo(120, 20);
      ctx.lineTo(120, 120);
      ctx.lineTo(20, 120);
      ctx.closePath();
      ctx.stroke();
    },
    download() {
      const canvas = this.$refs.canvas;
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("download.pdf");
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
