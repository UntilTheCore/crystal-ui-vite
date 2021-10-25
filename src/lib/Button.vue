<template>
  <button class="cs-button" v-bind="attrs">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  // 取消默认绑定到根节点
  inheritAttrs: false
};
</script>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
console.log(attrs);
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid red;
}
</style>