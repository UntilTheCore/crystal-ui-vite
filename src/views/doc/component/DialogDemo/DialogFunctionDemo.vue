<demo>函数用法</demo>
<template>
  <Button @click="onOpenDialog">dialog函数</Button>
</template>

<script setup lang="ts">
import Button from '@/lib/Button.vue';
import { dialog } from '@/lib/openDialog';

const onOpenDialog = () => {
  dialog({
    title: "dialog fn",
    content: "dialog fn content",
    closeOnClickOverlay: false,
    confirm: () => {
      return false
    },
    cancel: () => {
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.dialogfunctiondemo {
  border: 1px solid skyblue;
}
</style>