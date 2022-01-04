<template>
  <button class="cs-button" :class="classes">
    <span v-if="loading" class="cs-loading-indicator"></span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
  /** 按钮主题 */
  theme?: "button" | "link" | "text",
  /** 按钮尺寸 */
  size?: "small" | "normal" | "large",
  /** 提示级别 */
  level?: "main" | "normal" | "danger",
  /** 加载动画 */
  loading?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  theme: "button",
  size: "normal",
  level: "normal",
  loading: false,
});

const classes = computed(() => {
  return {
    [`cs-button__theme-${props.theme}`]: props.theme,
    [`cs-button__size-${props.size}`]: props.size,
    [`cs-button__level-${props.level}`]: props.level,
  };
});

</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
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
  transition: background 250ms;

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

  /* 不同主题的level有异，需要单独编写 */
  /* 普通按钮主题 level */
  &.cs-button__theme-button {
    &.cs-button__level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.cs-button__level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  /* link 主题 level */
  &.cs-button__theme-link {
    &.cs-button__level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  /* text 主题 level */
  &.cs-button__theme-text {
    &.cs-button__level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.cs-button__level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  /* disabled 样式 */
  &.cs-button__theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.cs-button__theme-link,
  &.cs-button__theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .cs-loading-indicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: cs-indicator-spin 1s infinite linear;
  }

  @keyframes cs-indicator-spin {
    0% {
      transoform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>