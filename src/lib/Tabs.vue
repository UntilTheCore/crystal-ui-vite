<template>
  <div class="cs-tabs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import Tab from './Tab.vue';

const slots = useSlots();

if (slots.default?.()) {
  slots.default().forEach((item, index) => {
    if (item.type !== Tab) {
      throw Error(`[Crystal error]: The element ${index} type is not Tab`)
    }
  })
} else {
  throw Error("[Crystal error]: Tabs missing content")
}


</script>

<style lang="scss" scoped>
</style>