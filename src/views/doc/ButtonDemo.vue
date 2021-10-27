<template>
  <div class="button-demo">
    <div>Button 示例</div>
    <h2>示例1</h2>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
    <h2>示例2</h2>
    <h3>button主题</h3>
    <Button size="small">small size</Button>
    <Button size="normal">default/normal size</Button>
    <Button size="large">large size</Button>
    <h3>link主题</h3>
    <Button theme="link" size="small">small size</Button>
    <Button theme="link" size="normal">default/normal size</Button>
    <Button theme="link" size="large">large size</Button>
    <h3>text主题</h3>
    <Button theme="text" size="small">small size</Button>
    <Button theme="text" size="normal">default/normal size</Button>
    <Button theme="text" size="large">large size</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>

<style lang="scss" scoped>
.button-demo {
}
</style>