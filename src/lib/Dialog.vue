<template>
  <template v-if="modelValue">
    <div class="cs-dialog__overlay"></div>
    <div class="cs-dialog-wrapper">
      <div class="cs-dialog">
        <section class="cs-dialog__header">
          <p class="cs-dialog__header-title">标题</p>
          <i class="cs-dialog__header-close"></i>
        </section>
        <section class="cs-dialog__main">
          <p>第一行</p>
          <p>第二行</p>
        </section>
        <section class="cs-dialog__footer">
          <Button level="main">确定</Button>
          <Button>取消</Button>
        </section>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import Button from "./Button.vue";

type Props = {
  modelValue: boolean,
}

defineEmits(['update:modelValue'])

withDefaults(defineProps<Props>(), {
  modelValue: false,
})

</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.cs-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  &__header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;

    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;

      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

  &__main {
    padding: 12px 16px;
  }

  &__footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
}
</style>