<template>
  <div class="home-wrapper">
    <Icon name="crystal-white" width="1.5em" height="1.5em"></Icon>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/UntilTheCore/crystal-ui-vite" target="_blank">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <footer>
    <section v-for="(item, index) in introduces" :key="index">
      <Icon :name="item.icon" width="4em" height="4em" />
      <div class="box">
        <p class="title">{{ item.title }}</p>
        <p class="content">{{ item.content }}</p>
      </div>
    </section>
  </footer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Icon from '@/components/Icon.vue';

// 内容介绍
const introduces = ref([
  {
    icon: 'vite',
    title: 'Vite',
    content: '采用Vite创建项目，就是快',
  },
  {
    icon: 'vue',
    title: '基于 Vue3',
    content: '使用Vue3 Composition API',
  },
  {
    icon: 'ts',
    title: '基于 TypeScript',
    content: '源代码使用 TypeScript 编写',
  },
  {
    icon: 'light',
    title: '代码易读',
    content: '组件的源代码都简洁易读'
  }
])
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
  clip-path: ellipse(80% 60% at 50% 40%);

  .icon {
    position: relative;
    left: 10px;
    top: 6px;
  }

  .banner {
    padding: 60px 0;
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
}

footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto;
  position: relative;
  left: 9%;
  transition: all .3s;

  > section {
    flex: 50%;
    display: flex;
    margin-top: 20px;
    .box {
      padding: 6px;
      .title {
        font: {
          weight: 700;
          size: 18px;
        }
      }

      .content {
        font-size: 14px;
        margin-top: 4px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  footer {
    width: 80%;

  }
}

@media screen and (max-width: 650px) {
  footer {
    width: 100%;
    left: 0;
    padding-left: 22%;


    > section {
      flex: 100%;

    }
  }
}


</style>