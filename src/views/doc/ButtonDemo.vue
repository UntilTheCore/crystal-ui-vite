<template>
  <div class="button-demo">
    <div>Button 示例</div>
    <h2>示例1</h2>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
    <h2>示例2</h2>
    <Button size="small">small size</Button>
    <Button size="normal">default/normal size</Button>
    <Button size="large">large size</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>

<style lang="scss" scoped>
.button-demo {
}
</style>