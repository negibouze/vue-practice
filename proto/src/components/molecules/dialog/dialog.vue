<template>
  <div>
    <button type="text" @click="dialogVisible = true">click to open the Dialog</button>
    <ElDialog
      title="Tips"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </ElDialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dialog as ElDialog } from 'element-ui'

export default Vue.extend({
  name: 't-dialog',
  components: {
    ElDialog
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  props: {
  },
  computed: {
  },
  methods: {
    handleClick(evt: Object) {
      this.$emit('onclick', evt)
    },
    handleClose(done: () => void) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
})
</script>

<style lang="stylus" scoped>
</style>
