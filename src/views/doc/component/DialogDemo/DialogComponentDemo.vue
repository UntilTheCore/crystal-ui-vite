<demo>组件用法</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model="dialogVisiable"
      :closeOnClickOverlay="false"
      :ok="onConfirm"
      :cancel="onCancel"
    >
      <template #title>
        <strong>加粗的标题</strong>
      </template>
      <template #default>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from '@/lib/Dialog.vue'
import Button from '@/lib/Button.vue'
import {
  ref
} from 'vue'

const dialogVisiable = ref(false)
const toggle = () => {
  dialogVisiable.value = !dialogVisiable.value
}
const onConfirm = () => { return false }
const onCancel = () => { return false }
</script>