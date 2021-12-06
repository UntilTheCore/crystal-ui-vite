<template>
  <div>
    <h1>Switch 开关</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
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