<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
type Props = {
  filename: string
}
const props = defineProps<Props>()
const md = ref<string>()
import(`../markdown/${props.filename}.md`).then((res) => {
  md.value = res.default
})
</script>