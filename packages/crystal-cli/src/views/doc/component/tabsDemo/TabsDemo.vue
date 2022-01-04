<demo>常规用法</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2234">内容2</Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';

const selected = ref('导航1');
</script>