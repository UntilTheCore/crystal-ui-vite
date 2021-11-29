<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script setup lang="ts">
import md from '@/markdown/get-start.md';
</script>

<style lang="scss" scoped>
.getstart {
  border: 1px solid skyblue;
}
</style>