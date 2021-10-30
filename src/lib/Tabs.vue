<template>
  <div class="cs-tabs">
    <ul>
      <li v-for="(title,i) in titles" :key="i + title">{{ title }}</li>
    </ul>
    <component v-for="(tab, i) in defaultSlots" :key="i" :is="tab"></component>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import Tab from './Tab.vue';

const slots = useSlots();

// 获取默认插槽以供渲染
const defaultSlots = slots.default?.() ?? [];

// 获取 title
const titles = defaultSlots.map(slot => {
  return slot?.props?.title;
})

/** 内部组件类型判断 */
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