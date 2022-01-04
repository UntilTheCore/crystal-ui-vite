<template>
  <div class="button-demo">
    <h2>Button 按钮</h2>
    <p>常用的按钮操作</p>
    <Demo :component="ButtonThemeDemo" />
    <Demo :component="ButtonSizeDemo" />
    <Demo :component="ButtonLevelDemo" />
    <Demo :component="ButtonDisable" />
    <Demo :component="ButtonLoadingDemo" />
  </div>
</template>

<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import ButtonThemeDemo from "./buttonDemo/ButtonThemeDemo.vue";
import ButtonSizeDemo from "./buttonDemo/ButtonSizeDemo.vue";
import ButtonLevelDemo from "./buttonDemo/ButtonLevelDemo.vue";
import ButtonDisable from "./buttonDemo/ButtonDisable.vue";
import ButtonLoadingDemo from "./buttonDemo/ButtonLoadingDemo.vue";
</script>