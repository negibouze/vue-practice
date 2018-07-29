<template>
  <Dialog
    :visible="visible"
  >
    <div class="mordal-search">
      <div class="button-container flex flex-between">
        <TButton @onclick="search">検索</TButton>
        <TButton @onclick="hide">閉じる</TButton>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Dialog from '@/components/molecules/dialog'
import TButton from '@/components/atoms/button'

export default Vue.extend({
  name: 'mordal-circle-search',
  components: {
    Dialog,
    TButton
  },
  data() {
    return {
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hide (): void {
      this.$emit('update:visible', false)
    }
  }
})
</script>

<style lang="stylus" scoped>
.mordal-search
  width: 270px
  border-radius: 8px
  background-color: #cfcfcf

.button-container
  width: 100%
  padding: 10px
</style>
