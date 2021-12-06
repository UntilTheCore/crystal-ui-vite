<template>
  <div>
    <h2>Tabs 标签页</h2>
    <p>分隔内容上有关联但属于不同类别的数据集合。</p>
    <Demo :component="TabsDemo" />
  </div>
</template>

<script setup lang="ts">
import Demo from '@/components/Demo.vue'
import TabsDemo from './tabsDemo/TabsDemo.vue';
</script>