<template>
  <div class="dialog-demo">
    <div>dialog示例</div>
    <Button @click="data.visible = true">打开dialog</Button>
    <Dialog v-model="data.visible" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';

const data = ref({
  visible: false
})
</script>

<style lang="scss" scoped>
.dialog-demo {
}
</style>