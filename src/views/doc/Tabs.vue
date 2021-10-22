<template>
  <div class="tabs">
    <p v-for="i in 120" :key="i">{{i}}tabs</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.tabs {
  border: 1px solid skyblue;
}
</style>