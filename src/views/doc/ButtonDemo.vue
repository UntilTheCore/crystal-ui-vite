<template>
  <div class="button-demo">
    <Button>Default</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>

<style lang="scss" scoped>
.button-demo {
}
</style>