<template>
  <div class="topnav">
    <span class="toggle-btn" @click.stop="toggleAsideVisible"></span>
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

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

  > .logo {
    height: 20px;
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
    max-height: 20px;
    transition: all 0.3s;
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
    display: none;
    width: 20px;
    height: 20px;
    background-color: skyblue;
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