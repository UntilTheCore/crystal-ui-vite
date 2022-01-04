<demo>基础示例</demo>
<template>
  <Switch v-model="bool"></Switch>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Switch from "@/lib/Switch.vue";

const bool = ref(false)
</script>