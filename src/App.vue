<template>
  <router-view />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, provide, readonly } from "vue";

const asideVisible = ref( document.documentElement.clientWidth > 500 );
const toggleAsideVisible = () => {
  asideVisible.value = !asideVisible.value;
};

const setAsideVisible = (status: boolean) => {
  asideVisible.value = status;
};

provide( "asideVisible", readonly( asideVisible ) );
provide( "toggleAsideVisible", toggleAsideVisible );
provide( "setAsideVisible", setAsideVisible );

</script>
<style>
</style>
