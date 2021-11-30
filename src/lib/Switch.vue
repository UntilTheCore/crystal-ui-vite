<template>
  <button class="cs-switch" :class="{ 'cs-checked': modelValue }" @click.stop.capture="toggle">
    <span></span>
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue"])
const props = defineProps<{
  modelValue: boolean
}>()

const toggle = () => {
  emits("update:modelValue", !props.modelValue)
};
</script>

<style lang="scss" scoped>
@use "sass:math";

$outer-height: 20px;
$inner-height: $outer-height - 4px;

.cs-switch {
  height: $outer-height;
  width: $outer-height * 2;
  border: none;
  background: #dcdfe6;
  border-radius: math.div($outer-height, 2);
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $inner-height;
    width: $inner-height;
    background: white;
    border-radius: math.div($inner-height, 2);
    transition: all 0.3s;
  }

  &:active {
    $animation-w: 5px;

    > span {
      width: calc(#{$inner-height} + #{$animation-w});
    }

    &.cs-checked > span {
      margin-left: -$animation-w;
      width: calc(#{$inner-height} + #{$animation-w});
    }
  }

  &.cs-checked {
    background: #559efe;

    > span {
      left: calc(100% - #{$inner-height} - 2px);
    }
  }
}
</style>