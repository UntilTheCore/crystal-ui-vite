<template>
  <aside>
    <h2>组件列表</h2>
    <ol>
      <li>
        <router-link to="/doc/switch">Switch 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs 组件</router-link>
      </li>
    </ol>
  </aside>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  background: lightblue;
  width: var(--asidebar-width);
  height: 100vh;
  padding: calc(var(--navbar-height) + 10px) 16px 16px;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>