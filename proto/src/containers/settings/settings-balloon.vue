<template>
  <div class="settings-wrapper">
    <Settings @onclick="update">
      <Balloon
        :items="items"
        :displayKeys="display"
      />
    </Settings>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Settings from '@/components/organisms/settings'
import { Balloon } from '@/components/molecules/settings'

export default Vue.extend({
  name: 'settings-balloon-container',
  components: {
    Settings,
    Balloon
  },
  computed: {
    items (): any {
      const items = this.$store.state.settings.balloon.items
      return items
    },
    display (): number[] {
      const keys = this.$store.state.settings.balloon.display
      return keys
    }
  },
  methods: {
    get (): void {
      this.$store.dispatch('settings/balloon/get')
    },
    update (evt: MouseEvent, form: HTMLFormElement): void {
      console.log(form)
      this.$store.dispatch('settings/balloon/update', [])
      evt.preventDefault()
      evt.stopPropagation()
    }
  },
  created () {
    this.get()
  }
})
</script>

<style lang="stylus" scoped>
.settings-wrapper
  width: 100%
  height: 100%
</style>
