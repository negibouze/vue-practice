<template>
  <el-dropdown
    class="select-none"
    :trigger="trigger"
     @command="handleCommand"
  >
    <span class="el-dropdown-link">
      {{ current }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in items"
        :key="item.key"
        :command="item.key"
        :disabled="item.key === selected"
      >
        {{ item.value }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Dropdown as ElDropdown, DropdownMenu as ElDropdownMenu, DropdownItem as ElDropdownItem } from 'element-ui';
import { NumberKeyItem, StringKeyItem } from '@/interfaces/dropdown';
import { Trigger } from '@/value-objects/dropdown';

const DropdownProps = Vue.extend({
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator: (val: string) => Object.values(Trigger).includes(val)
    },
    items: {
      type: Array,
      required: true,
      validator: (val: NumberKeyItem[] | StringKeyItem[]) => {
        let a: any = []
        for (let v of val) {
          if (a.includes(v.key)) {
            return false
          }
          a.push(v.key)
        }
        return true
      }
    },
    selectedkey: {
      type: [String, Number]
    }
  }
})
@Component({
  components: {
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
  }
})
export default class Dropdown extends DropdownProps {
  selected: string | number | object = this.selectedkey | this.items[0].key
  get current (): string {
    for (let item of this.items) {
      if (item.key === this.selected) { return item.value }
    }
    return 'not found'
  }
  handleCommand (command: string | number | object): void {
    this.selected = command
    this.$emit('change', command);
  }
}
</script>

<style lang="stylus" scoped>
.el-dropdown-link
  cursor: pointer
  color: #409EFF

.el-icon-arrow-down
  font-size: 12px
</style>
