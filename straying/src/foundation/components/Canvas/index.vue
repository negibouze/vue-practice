<template>
  <div class="container">
    <div class="table-area">
      <list-test
        :columns="Object.keys(projects[0])"
        :projects="projects"
        id="table"
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
import { mapState, mapActions } from 'vuex'
import { mordalTypes as types } from '@/foundation/types'
import jsPDF from 'jsPDF'
import ButtonTest from '../ButtonTest'
import ListTest from '../ListTest'

export default {
  name: 'Canvas',
  components: {
    ButtonTest,
    ListTest
  },
  data() {
    return {
      projects: [
        {
          name: 'name1',
          age: 20,
          address: 'address1'
        },
        {
          name: 'name2',
          age: 25,
          address: 'address2'
        },
        {
          name: 'name3',
          age: 30,
          address: 'address3'
        },
        {
          name: 'name4',
          age: 35,
          address: 'address4'
        },
        {
          name: 'name5',
          age: 40,
          address: 'address5'
        },
      ]
    }
  },
  methods: {
    drawing() {
      this.show(types.FORM)
      this.drawSVG()
      // /* canvas要素のノードオブジェクト */
      // const canvas = this.$refs.canvas;
      // /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
      // if (!canvas || !canvas.getContext) {
      //   return false;
      // }
      // /* 2Dコンテキスト */
      // var ctx = canvas.getContext('2d');
      // /* 四角を描く */
      // ctx.beginPath();
      // ctx.moveTo(20, 20);
      // ctx.lineTo(120, 20);
      // ctx.lineTo(120, 120);
      // ctx.lineTo(20, 120);
      // ctx.closePath();
      // ctx.stroke();

      // this.drawSVG()
    },
    drawSVG() {
      const svgString = `
      <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
        <style>
          td {
            background-color:yellow;
            padding: 10px;
          }
        </style>
        <foreignObject width='100%' height='100%'>
          <div xmlns='http://www.w3.org/1999/xhtml' style='font-size:40px'>
            ${ document.getElementById('table').innerHTML }
          </div>
        </foreignObject>
      </svg>
      `
      this.begin(svgString);
    },
    download() {
      const canvas = this.$refs.canvas;
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("download.pdf");
    },
    ...mapActions('mordal', [
      'show'
    ]),
    ...mapActions('form', [
      'begin'
    ])    
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
