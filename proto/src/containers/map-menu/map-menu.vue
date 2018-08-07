<template>
  <map-menu
    :menu="menu"
    :visibleCircle="circle"
    :visibleConditions="conditions"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MapMenu from '@/components/organisms/map-menu'
import DropDownVO from '@/value-objects/dropdown'

const MapMenuContaierProps = Vue.extend({})
@Component({
  components: {
    MapMenu,
  }
})
export default class MapMenuContaier extends MapMenuContaierProps {
  get menu(): DropDownVO {
    return this.$store.state.mapmenu.menu;
  }
  get circle(): void {
    return this.$store.state.circle.visibility;
  }
  get rectangle(): void {
    return this.$store.state.rectangle.visibility;
  }
  get conditions(): void {
    return this.$store.state.conditions.visibility;
  }
}
</script>
