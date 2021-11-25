<template>
  <div class="dialog-demo">
    <div>dialog示例</div>
    <Button @click="data.visible = true">打开dialog</Button>
    <Dialog v-model="data.visible" title="提示" :confirm="onConfirm" :cancel="onCancel">
      <template #default>
        <div>
          <p>hi</p>
          <p>hi2</p>
        </div>
      </template>
      <template #title>
        <div>标题</div>
      </template>
    </Dialog>

    <Button @click="onOpenDialog">dialog函数</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';
import { dialog } from '@/lib/openDialog';

const data = ref({
  visible: false
})

const onConfirm = () => {
  console.log('demo confirm');
  return false;
}

const onCancel = () => {
  console.log("demo cancel");
  return false;
}

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
</style>