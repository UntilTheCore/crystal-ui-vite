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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';

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

</script>

<style lang="scss" scoped>
.dialog-demo {
}
</style>