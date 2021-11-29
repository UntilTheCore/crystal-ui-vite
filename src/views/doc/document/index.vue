<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import md from '@/markdown/intro.md';

export default defineComponent({
  data() {
    return {
      md
    }
  }
})

</script>

<style lang="scss" scoped>
.intro {
  border: 1px solid skyblue;
}
</style>