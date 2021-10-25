<template>
  <button
    :class="{checked}"
    @click.stop.capture="toggle"
  >
    <span :class="checked ? 'left' : 'right'"></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked = ref( false );
const toggle = () => {
  checked.value = !checked.value;
};
</script>

<style lang="scss" scoped>
@use "sass:math";

$h: 22px;
$h2: $h - 4px;

button {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: math.div($h2, 2);
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: all .3s;
  }

  &:active {
    $animation-w: 4px;

    > span.left {
      margin-left: -$animation-w;
      width: calc(#{$h2} + #{$animation-w});
    }

    > span.right {
      width: calc(#{$h2} + #{$animation-w});
    }
  }

  &.checked {
    background: #42b983;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>