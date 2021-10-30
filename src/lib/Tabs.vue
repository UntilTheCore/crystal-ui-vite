<template>
  <div class="cs-tabs">
    <ul class="cs-tabs-nav">
      <li class="cs-tabs-nav-item" v-for="(title,i) in titles" :key="i + title">{{ title }}</li>
    </ul>
    <div class="cs-tabs-content">
      <component v-for="(tab, i) in defaultSlots" :key="i" :is="tab"></component>
    </div>
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
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.cs-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>