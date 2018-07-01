<template>
  <div class="container">
    <div id="draw-container" class="draw-container">
      <div class="upper-container flex">
        <div id="img-container" class="img-container">
        </div>
        <div id="info-container" class="info-container">
          <svg width="200" height="200" id="svg"></svg>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button id="draw" class="btn-normal" @click="draw">draw</button>
      <button id="draw2" class="btn-normal" @click="draw2" disabled>draw2</button>
      <button id="dlpng" class="btn-normal" @click="dlpng" disabled>download png</button>
      <button id="dlpdf" class="btn-normal" @click="dlpdf" disabled>download pdf</button>
    </div>
    <div id="svg-container" class="svg-container"></div>
    <div id="canvas-container" class="canvas-container">
      <canvas id="c"></canvas>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
import jsPDF from 'jsPDF'

const item = [
]

const elm = (id) => {
  return document.getElementById(id);
}

const position = () => {
  const con = getComputedStyle(elm('draw-container'))
  const img = elm('img-container')
  const info = elm('info-container')
  const list = elm('list-container')
  return {
    'frame': { w: con.width, h: con.height },
    'img': { x: 0, y: 0, w: img.clientWidth, h: img.clientHeight }
  }
}

const getDataUri = (targetUrl, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', targetUrl);
  xhr.responseType = 'blob';
  xhr.send();
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
  name: 'chart',
  data() {
    return {
      titles: [],
      items: Array(10).fill(item)
    }
  },
  methods: {
    draw() {
      this.drawChart()
    },
    drawChart() {
      const svg = d3.select('svg')
        .append('circle')
        .style('stroke', 'gray')
        .style('fill', 'white')
        .attr('r', 40)
        .attr('cx', 50)
        .attr('cy', 50)
      // const svg = d3.select('svg');
      // const margin = {top: 20, right: 20, bottom: 30, left: 50};
      // const width = +svg.attr('width') - margin.left - margin.right;
      // const height = +svg.attr('height') - margin.top - margin.bottom;
      // const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);
      // const parseTime = d3.timeParse('%d-%b-%y');
      // const x = d3.scaleTime().rangeRound([0, width]);
      // const y = d3.scaleLinear().rangeRound([height, 0]);

      // d3.tsv('./data.tsv', (d) => {
      //   d.date = parseTime(d.date);
      //   d.close = +d.close;
      //   return d;
      // }, (error, data) => {
      //   if (error) throw error;
      //   x.domain(d3.extent(data, (d) => { return d.date; }));
      //   y.domain(d3.extent(data, (d) => { return d.close; }));
      //   g.append('g')
      //       .attr('transform', `translate(0, ${height})`)
      //       .call(d3.axisBottom(x))
      //       .select('.domain')
      //       .remove();
      //   g.append('g')
      //       .call(d3.axisLeft(y))
      //       .append('text')
      //       .attr('fill', '#000')
      //       .attr('transform', 'rotate(-90)')
      //       .attr('y', 6)
      //       .attr('dy', '0.71em')
      //       .attr('text-anchor', 'end')
      //       .text('Price ($)');
      //   g.append('path')
      //       .datum(data)
      //       .attr('fill', 'none')
      //       .attr('stroke', 'steelblue')
      //       .attr('stroke-linejoin', 'round')
      //       .attr('stroke-linecap', 'round')
      //       .attr('stroke-width', 1.5)
      //       .attr('d', line);
      // });
      elm('draw2').disabled = false;
    },
    draw2() {
      this.drawSVG(elm('svg'))
    },
    drawSVG(svg) {
      // if (!!document.querySelector('svg')) {
      //   return;
      // }
      const pos = position();
      const svgString = `
      <svg xmlns='http://www.w3.org/2000/svg' width='${pos.frame.w}' height='${pos.frame.h}'>
        ${ svg.outerHTML }
      </svg>
      `;
      const parser = new DOMParser();
      const svg2 = parser.parseFromString(svgString, 'image/svg+xml');
      elm('svg-container').appendChild(svg2.documentElement);
      elm('dlpng').disabled = false;
      elm('dlpdf').disabled = false;
      this.drawOnCanvas(svgString);
    },
    drawOnCanvas(svgString) {
      const pos = position();
      const canvas = elm('c');
      canvas.width = parseInt(pos.frame.w);
      canvas.height = parseInt(pos.frame.h);
      const ctx = canvas.getContext('2d');
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      }
      image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgString))); 
    },
    dlpng() {
      this.download((canvas) => {
        const a = document.createElement("a");
        a.setAttribute('type', 'hidden');
        a.download = "sample.png";
        a.href = canvas.toDataURL('image/png');
        document.body.appendChild(a);
        a.click();
        a.remove();
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
