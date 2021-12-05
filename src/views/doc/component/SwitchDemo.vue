<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script setup lang="ts">
import Switch1Demo from './Switch1Demo.vue';
import Switch2Demo from './Switch2Demo.vue';
import Demo from '@/components/Demo.vue';
</script>

<style lang="scss" scoped>
</style>