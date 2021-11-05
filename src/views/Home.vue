<template>
  <div class="home-wrapper">
    <TopNav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/UntilTheCore/crystal-ui-vite" target="_blank">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import TopNav from '@/components/TopNav.vue';
</script>
<style lang="scss" scoped>
@use 'sass:math';
$green: #02bcb0;
$color: #fff;
$border-radius: 4px;

.home-wrapper {
  background: linear-gradient(
    145deg,
    rgba(113, 196, 254, 1) 0%,
    rgba(169, 239, 253, 1) 100%
  );
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  > .actions {
    padding: 8px 0;
    color: #666;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      border-radius: $border-radius;
      padding: 4px 12px;
    }
  }
}
</style>