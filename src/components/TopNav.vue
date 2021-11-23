<template>
  <div class="topnav">
    <Icon
      name="crumb"
      class="toggle-btn"
      width="1.5em"
      height="1.5em"
      @click.stop="toggleAsideVisible"
    />
    <router-link to="/" class="logo">
      <Icon name="crystal" width="1.5em" height="1.5em"></Icon>
    </router-link>
    <router-link to="/doc">文档</router-link>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import Icon from "./Icon.vue";

const toggleAsideVisible = inject<() => void>("toggleAsideVisible");
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: var(--navbar-height);
  padding: 0 15px;

  a {
    color: #555;
  }

  > .logo {
    height: 20px;
    max-width: 6em;
    margin-right: auto;
    margin-top: -5px;
    max-height: 20px;
    transition: all 0.3s;
    margin-left: calc(var(--asidebar-width) / 2 - 15px);
    transform: translateX(-50%);
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    max-height: 20px;
    line-height: 20px;

    > li {
      margin: 0 1em;
    }
  }

  > .toggle-btn {
    position: absolute;
    display: none;
  }

  @media screen and (max-width: 500px) {
    > .toggle-btn {
      display: inline-block;
    }

    > .menu {
      display: none;
    }

    > .logo {
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>