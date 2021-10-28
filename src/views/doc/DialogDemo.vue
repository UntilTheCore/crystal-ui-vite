<template>
  <div class="dialog-demo">
    <div>dialog示例</div>
    <Button @click="data.visible = true">打开dialog</Button>
    <Dialog 
      v-model="data.visible" 
      :confirm="onConfirm" 
      :cancel="onCancel" 
    />
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