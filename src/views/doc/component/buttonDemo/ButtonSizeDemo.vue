<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="large">large</Button>
      <Button>default</Button>
      <Button size="small">small</Button>
    </div>
    <div>
      <Button theme="link" size="large">large</Button>
      <Button theme="link">default</Button>
      <Button size="small" theme="link">small</Button>
    </div>
    <div>
      <Button size="large" theme="text">large</Button>
      <Button theme="text">default</Button>
      <Button size="small" theme="text">small</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>