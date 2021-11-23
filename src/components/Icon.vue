<template>
  <svg class="icon" aria-hidden="true" :style="{ width, height }">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
type Props = {
  name: string,
  width?: string,
  height?: string,
}
const props = withDefaults(defineProps<Props>(), {
  width: '1em',
  height: '1em',
});

</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #fff;
}
</style>