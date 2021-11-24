<template>
  <aside>
    <template v-for="(item, index) in links" :key="index">
      <h2>{{ item.title }}</h2>
      <ol>
        <li v-for="(link, i) in item.links" :key="i">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>
      </ol>
    </template>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  {
    title: '文档',
    links: [
      {
        name: '介绍',
        link: '/doc/intro'
      },
      {
        name: '安装',
        link: '/doc/install'
      },
      {
        name: '开始使用',
        link: '/doc/get-start'
      },
    ]
  },
  {
    title: '组件',
    links: [
      {
        name: 'Switch 组件',
        link: '/doc/switch'
      },
      {
        name: 'Button 组件',
        link: '/doc/button'
      },
      {
        name: 'Dialog 组件',
        link: '/doc/dialog'
      },
      {
        name: 'Tabs 组件',
        link: '/doc/tabs'
      },
    ]
  },
])
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