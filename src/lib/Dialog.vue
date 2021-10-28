<template>
  <div class="cs-dialog">
    <section class="cs-dialog__title">
      <p class="cs-dialog__title-content">
        标题
      </p>
      <i>x</i>
    </section>
    <section class="cs-dialog__main">
      <p>第一行</p>
      <p>第二行</p>
    </section>
    <section class="cs-dialog__footer">
      <Button>确定</Button>
      <Button>取消</Button>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
</script>

<style lang="scss">
.cs-dialog {
  border: 1px solid skyblue;
}
</style>