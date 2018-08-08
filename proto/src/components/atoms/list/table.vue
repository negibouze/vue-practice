<template>
  <div>
    <el-table
      class="table"
      ref="multipleTable"
      :data="projects"
      @selection-change="handleSelectionChange"
      stripe
    >
      <el-table-column v-for="column in columns"
        :key="column.key"
        :prop="column.key"
        :label="column.value"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Table as ElTable, TableColumn as ElTableColumn } from 'element-ui';

const TListProps = Vue.extend({
  props: {
    columns: Object,
    projects: Array,
    isScrollable: {
      type: Boolean,
      default: true,
    }
  }
})
@Component({
  components: {
    ElTable,
    ElTableColumn,
  }
})
export default class TList extends TListProps {
  selections: object = [];
  // method
  handleSelectionChange(val) {
    this.selections = val;
  }
  $refs!: {
    multipleTable: HTMLElement,
  }
}
</script>

<style lang="stylus" scoped>
.table
  width: 100%
</style>
