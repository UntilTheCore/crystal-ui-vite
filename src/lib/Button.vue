<template>
  <button class="cs-button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
  /** 按钮主题 */
  theme?: "button" | "link" | "text",
  /** 按钮尺寸 */
  size?: "small" | "normal" | "large"
}

const props = withDefaults(defineProps<Props>(), {
  theme: "button",
  size: "normal",
});

const classes = computed(() => {
  return {
    [`cs-button__theme-${props.theme}`]: props.theme,
    [`cs-button__size-${props.size}`]: props.size,
  };
});

</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.cs-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  /* 处理在 firefox 下 focus 样式兼容问题 */
  &::-moz-focus-inner {
    border: 0;
  }

  /* 链接主题 */
  &.cs-button__theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  /* 文本主题 */
  &.cs-button__theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  /* 小尺寸 */
  &.cs-button__size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  /* 大尺寸 */
  &.cs-button__size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
}
</style>