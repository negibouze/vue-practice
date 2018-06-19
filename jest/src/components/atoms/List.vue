<template>
  <ul>
    <li :key="item" v-for="item in items">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'list',
  props: [
    'items'
  ]
}
</script>
