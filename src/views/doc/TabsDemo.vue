<template>
  <div class="tabs-demo">
    <div>Tabs示例</div>
    <Tabs>
      <Tab title="标签1">内容1</Tab>
      <Tab title="标签2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';

</script>

<style lang="scss" scoped>
.tabs-demo {
}
</style>