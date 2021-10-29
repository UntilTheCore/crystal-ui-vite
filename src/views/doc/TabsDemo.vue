<template>
  <div class="tabs">
    <div>Tabs示例</div>
    <Tabs>
      <Tab title="标签1" />
      <Tab title="标签2" />
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';

</script>

<style lang="scss" scoped>
.tabs {
  border: 1px solid skyblue;
}
</style>