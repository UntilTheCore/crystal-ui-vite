<template>
  <div class="tabs-demo">
    <div>Tabs示例</div>
    <Tabs v-model:selected="selected">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2234">内容2</Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';

const selected = ref('导航1');
</script>

<style lang="scss" scoped>
</style>