<template>
  <div class="settings-container">
    <ElCollapse v-for="menu in menus"
      :key="menu.name"
      v-model="activeNames"
      @change="handleChange"
    >
      <ElCollapseItem :title="`${menu.title}設定`" :name="menu.name">
        <Settings :name="menu.name" />
      </ElCollapseItem>
    </ElCollapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Collapse as ElCollapse, CollapseItem as ElCollapseItem } from 'element-ui'
import Settings from '@/components/organisms/settings'

enum Menu {
  Ballon = 1,
  CSV,
  Forms,
  List,
  Range,
}

export default Vue.extend({
  name: 'settings',
  components: {
    ElCollapse,
    ElCollapseItem,
    Settings
  },
  data() {
    return {
      activeNames: [],
      menus: [
        { title: 'バルーン', name: Menu.Ballon },
        { title: 'CSV', name: Menu.CSV },
        { title: '帳票', name: Menu.Forms },
        { title: 'リスト', name: Menu.List },
        { title: 'レンジ', name: Menu.Range }
      ]
    };
  },
  methods: {
    handleChange(val: object) {
      console.log(val);
    }
  }
})
</script>

<style lang="stylus" scoped>
.settings-container
  width: 100%
  height: 100%
</style>
