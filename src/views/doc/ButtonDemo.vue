<template>
  <div class="button-demo">
    <div>Button 示例</div>
    <h2>主题theme</h2>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
    <h2>大小size</h2>
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
    <h2>警告等级level</h2>
    <h3>button主题</h3>
    <Button>normal level</Button>
    <Button level="main">main level</Button>
    <Button level="danger">danger level</Button>
    <h3>link主题</h3>
    <Button theme="link">normal level</Button>
    <Button level="main" theme="link">main level</Button>
    <Button level="danger" theme="link">danger level</Button>
    <h3>text主题</h3>
    <Button theme="text">normal level</Button>
    <Button level="main" theme="text">main level</Button>
    <Button level="danger" theme="text">danger level</Button>
    <h1>禁用</h1>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
    <h1>loading</h1>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>

<style lang="scss" scoped>
.button-demo {
}
</style>