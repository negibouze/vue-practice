<template>
  <div class="example">
    <div class="text-area">
      <textarea name="foo" id="foo" cols="30" rows="10" ref="test"></textarea>
    </div>
    <div class="button-area">
      <ButtonTest
        title="generate PDF"
        :onClick="printPDF"
      />
    </div>
  </div>
</template>

<script>
// import jsPDF from 'jsPDF'
// import pdfjsLib from 'pdfjs-dist'
import ButtonTest from '../ButtonTest'

// const pdf = new jsPDF()

// Setting worker path to worker bundle.
// pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.bundle.js';

export default {
  name: 'PDF',
  methods: {
    printPDF() {
      // pdf.text(this.$refs.test.value, 10, 10)
      // const data = pdf.output('dataurl')
      // pdfjsLib.getDocument(data)
      //   .then((pdf) => {
      //     return pdf.getPage(1)
      //   })
      //   .then((page) => {
      //     // Set scale (zoom) level
      //     var scale = 1.5
      //     // Get viewport (dimensions)
      //     var viewport = page.getViewport(scale)
      //     // Get canvas#the-canvas
      //     var canvas = document.getElementById('canvas')
      //     // Fetch canvas' 2d context
      //     var context = canvas.getContext('2d')
      //     // Set dimensions to Canvas
      //     canvas.height = viewport.height
      //     canvas.width = viewport.width
      //     // Prepare object needed by render method
      //     var renderContext = {
      //       canvasContext: context,
      //       viewport: viewport
      //     }
      //     // Render PDF page
      //     page.render(renderContext)
      //   })
    }
  },
  components: {
    ButtonTest
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>
