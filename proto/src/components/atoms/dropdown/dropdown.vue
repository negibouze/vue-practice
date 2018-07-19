<template>
  <Dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <DropdownMenu slot="dropdown">
      <DropdownItem>Action 1</DropdownItem>
      <DropdownItem>Action 2</DropdownItem>
      <DropdownItem>Action 3</DropdownItem>
      <DropdownItem disabled>Action 4</DropdownItem>
      <DropdownItem divided>Action 5</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'

export default Vue.extend({
  name: 'dropdown',
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  props: {
    items: {
      type: Array
    }
  },
  computed: {

  },
  methods: {
  }
})
</script>

<style lang="stylus" scoped>
.el-dropdown-link
  cursor: pointer
  color: #409EFF

.el-icon-arrow-down
  font-size: 12px

</style>
