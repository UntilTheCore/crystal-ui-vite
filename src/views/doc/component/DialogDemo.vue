<template>
  <div class="dialog-demo">
    <h2>Dialog对话框</h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <Demo :component="DialogComponentDemo" />
    <Demo :component="DialogFunctionDemo" />
  </div>
</template>

<script setup lang="ts">
import DialogComponentDemo from './DialogDemo/DialogComponentDemo.vue';
import Demo from '@/components/Demo.vue';
import DialogFunctionDemo from './DialogDemo/DialogFunctionDemo.vue';
</script>