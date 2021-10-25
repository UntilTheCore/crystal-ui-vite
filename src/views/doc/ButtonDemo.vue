<template>
  <div class="button-demo">
    <Button
      size="large"
      @click="onClick"
      @mouseover="onMouseOver"
    >
      Default
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";

const onClick = () => {
  console.log( "click" );
};

const onMouseOver = () => {
  console.log( "mouse over" );
};
</script>

<style lang="scss" scoped>
.button-demo {
}
</style>