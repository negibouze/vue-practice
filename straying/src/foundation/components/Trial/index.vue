<template>
  <div class="container">
    <div class="upper-container flex">
      <div id="img-container" class="img-container">
        <img id="cat" src="./angry cat.jpg" alt="I'm angry!">
      </div>
      <div id="info-container" class="info-container">
        <p>あいうえお</p>
      </div>
    </div>
    <div id="list-container" class="list-container">
      <table id="table">
      　<tr>
          <th v-for="(v, i) in titles"
            :key="'th-' + i"
          >
            {{ v }}
          </th>
      　</tr>
      　<tr v-for="(item, i) in items"
            :key="'item-' + i"
          >
          <td v-for="(v, j) in item"
            :key="'td-' + j"
          >
            {{ v }}
          </td>
      　</tr>
      </table>
    </div>
    <div class="button-container">
      <button id="draw" class="btn-normal" @click="draw">draw</button>
      <button id="dlpng" class="btn-normal" @click="dlpng" disabled>download png</button>
      <button id="dlpdf" class="btn-normal" @click="dlpdf" disabled>download pdf</button>
    </div>
    <div id="svg-container" class="svg-container"></div>
  </div>
</template>

<script>
import jsPDF from 'jsPDF'

const item = [
  '319戸',
  'RC一部S32階',
  '72.71㎡',
  '7,534万円',
  '2LDK 55.01㎡～',
  '108台',
  '2016年7月'
]

const elm = (id) => {
  return document.getElementById(id);
}
const position = () => {
  const img = elm('img-container')
  const info = elm('info-container')
  const list = elm('list-container')
  return [
    { x: 0, y: 0, w: img.clientWidth, h: img.clientHeight },
    { x: img.clientWidth, y: 0, w: info.clientWidth, h: info.clientHeight },
    { x: 0, y: img.clientHeight, w: list.clientWidth, h: list.clientHeight },
  ]
}

const convertToBase64 = (image, mimeType) => {
  var canvas = document.createElement('canvas');
  canvas.width  = image.width;
  canvas.height = image.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  return canvas.toDataURL(mimeType);
}

export default {
  name: 'Trial',
  data() {
    return {
      titles: [
        '総戸数',
        '構造・規模',
        '平均面積',
        '平均価格',
        '間取り',
        '駐車場',
        '竣工年月'
      ],
      items: Array(10).fill(item)
    }
  },
  methods: {
    draw() {
      if (!!document.querySelector("svg")) {
        return;
      }
      const pos = position();
      const svgString = `
      <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='640px'>
        <style>
          table {
            color: #333;
            width: 640px ;
            border-collapse: collapse;
            border-spacing: 0;
          }
          td, th {
            border: 1px solid #ccc;
            height: 30px;
          }
          th {
            background: #f3f3f3;
            font-weight: bold;
          }
          td {
            background: #fafafa;
            text-align: center;
          }
        </style>
        <foreignObject x='${pos[0].x}' y='${pos[0].y}' width='${pos[0].w}' height='${pos[0].h}'>
          <div xmlns="http://www.w3.org/1999/xhtml" style='width:100%; height:100%;'>
            <img src="${ convertToBase64(elm('cat'), 'image/jpeg') }" />
          </div>
        </foreignObject>
        <foreignObject x='${pos[1].x}' y='${pos[1].y}' width='${pos[1].w}' height='${pos[1].h}'>
          <div xmlns="http://www.w3.org/1999/xhtml" style='width:100%; height:100%;'>
            ${ elm('info-container').outerHTML }
          </div>
        </foreignObject>
        <foreignObject x='${pos[2].x}' y='${pos[2].y}' width='${pos[2].w}' height='${pos[2].h}'>
          <div xmlns='http://www.w3.org/1999/xhtml' style='width:100%; height:100%;'>
            ${ elm('table').outerHTML }
          </div>
        </foreignObject>
      </svg>
      `;
      const parser = new DOMParser();
      const svg = parser.parseFromString(svgString, 'image/svg+xml');
      elm('svg-container').appendChild(svg.documentElement);
      elm('dlpng').disabled = false;
      elm('dlpdf').disabled = false;
    },
    dlpng() {
      this.download((canvas) => {
        const a = document.createElement("a");
        a.download = "sample.png";
    	  a.href = canvas.toDataURL('image/png');
        a.click();
      })
    },
    dlpdf() {
      this.download((canvas) => {
        const pdf = new jsPDF();
        pdf.addImage(canvas.toDataURL("image/png"), 'JPEG', 0, 0);
        pdf.save("sample.pdf");
      })
    },
    download(fn) {
      const svg = document.querySelector("svg");
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      canvas.width = svg.width.baseVal.value;
      canvas.height = svg.height.baseVal.value;

      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
        fn(canvas);
      }
      image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData))); 
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
