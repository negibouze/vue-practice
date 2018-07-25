<template>
  <div class="settings-container scrollable">
    <ElCollapse v-model="activeNames" @change="handleChange">
      <ElCollapseItem v-for="menu in menus"
        :key="`key-${menu.name}`"
        :title="`${menu.title}設定`"
        :name="menu.name"
      >
        <component :is="menu.component" />
      </ElCollapseItem>
    </ElCollapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Collapse as ElCollapse, CollapseItem as ElCollapseItem } from 'element-ui'
import { Balloon, CSV, Forms, List, Range } from '@/containers/settings'

type Menu = {
  title: string
  name: string,
  component: object
} 

const SettingsProps = Vue.extend({})
@Component({
  components: {
    ElCollapse,
    ElCollapseItem,
    Balloon,
    CSV,
    Forms,
    List,
    Range
  }
})
export default class Settings extends SettingsProps {
  activeNames: number[] = []
  menus: Menu[] = [
    { title: 'バルーン', name: 'balloon', component: Balloon },
    { title: 'CSV', name: 'csv', component: CSV },
    { title: '帳票', name: 'forms', component: Forms },
    { title: 'リスト', name: 'list', component: List },
    { title: 'レンジ', name: 'range', component: Range }
  ]
  handleChange(val: object) {
    console.log(val);
  }
}
</script>

<style lang="stylus" scoped>
.settings-container
  width: 100%
  height: 100%
</style>
