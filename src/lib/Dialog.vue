<template>
  <template v-if="modelValue">
    <Teleport to="body">
      <div class="cs-dialog__overlay" @click="onClickOverlay"></div>
      <div class="cs-dialog-wrapper">
        <div class="cs-dialog">
          <section class="cs-dialog__header">
            <p class="cs-dialog__header-title">
              <slot v-if="$slots.title" name="title">title</slot>
              <template v-else>{{ title }}</template>
            </p>
            <i class="cs-dialog__header-close" @click="onClose"></i>
          </section>
          <section class="cs-dialog__main">
            <slot></slot>
          </section>
          <section class="cs-dialog__footer">
            <Button level="main" @click="confirm">确定</Button>
            <Button @click="cancel">取消</Button>
          </section>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
import Button from "./Button.vue";

type Props = {
  /** v-model 控制 dialog 显示/隐藏 */
  modelValue: boolean,
  /** 点击遮罩关闭 dialog，默认为 true */
  closeOnClickOverlay?: boolean,
  /** 点击确认并在关闭 dialog 前触发，可用于阻止dialog关闭 */
  confirm?: () => boolean,
  /** 点击取消并在关闭 dialog 前触发, 可用于阻止dialog关闭 */
  cancel?: () => boolean,
  /** dialog 左上角标题，在使用 title slot 时，将失效并以 slot 为准 */
  title?: string,
}

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  closeOnClickOverlay: true,
  title: '标题'
})

const onClose = () => {
  emits("update:modelValue", false);
}

const onClickOverlay = () => {
  props.closeOnClickOverlay && onClose();
}

/** 外部未绑定 confirm 则执行默认关闭 */
const confirm = () => {
  props.confirm ? props.confirm?.() && onClose() : onClose();
}

/** 外部未绑定 cancel 则执行默认关闭 */
const cancel = () => {
  props.cancel ? props.cancel?.() && onClose() : onClose();
}

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