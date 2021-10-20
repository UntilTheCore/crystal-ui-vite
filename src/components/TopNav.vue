<template>
  <div class="topnav">
    <div class="logo" @click="toggleAsideVisible">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const toggleAsideVisible = inject<() => void>( "toggleAsideVisible" );
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 15px;
  position: relative;
  z-index: 10;

  > .logo {
    height: 20px;
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
    max-height: 20px;
    transition: all .3s;
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

  @media screen and (max-width: 500px) {
    > .menu {
      display: none;
      //visibility: hidden;
    }

    > .logo {
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
}

</style>