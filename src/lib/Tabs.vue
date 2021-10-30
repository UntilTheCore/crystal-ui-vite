<template>
  <div class="cs-tabs">
    <div class="cs-tabs-nav">
      <div
        class="cs-tabs-nav-item"
        v-for="(title,i) in titles"
        :key="i + title"
        :class="{ selected: title === selected }"
        :ref="el => { if (el) divs[i] = el }"
        @click="select(title)"
      >{{ title }}</div>
      <i class="cs-tabs-nav-indicator" ref="refIndicator"></i>
    </div>
    <div class="cs-tabs-content">
      <template v-for="(tab, i) in defaultSlots" :key="i">
        <component v-if="tab?.props?.title === selected" :key="i" :is="tab"></component>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, watchPostEffect, ComponentPublicInstance } from 'vue';
import Tab from './Tab.vue';

type Props = {
  selected?: string,
}

const emits = defineEmits(['update:selected'])

const props = defineProps<Props>();

const divs = ref<(Element | ComponentPublicInstance)[]>([]);

const slots = useSlots();
const refIndicator = ref<HTMLDivElement>();

// 获取默认插槽以供渲染
const defaultSlots = slots.default?.() ?? [];

// 获取 title
const titles = defaultSlots.map(slot => {
  return slot?.props?.title;
})

/** 内部组件类型判断 */
if (slots.default?.()) {
  slots.default().forEach((item, index) => {
    if (item.type !== Tab) {
      throw Error(`[Crystal error]: The element ${index} type is not Tab`)
    }
  })
} else {
  throw Error("[Crystal error]: Tabs missing content")
}

const select = (title: string) => {
  emits("update:selected", title);
}

watchPostEffect(() => {
  const el = divs.value.filter(item => {
    return (item as HTMLDivElement).innerText.includes(props.selected as string);
  })[0]

  const _el = (el as HTMLDivElement);
  const { left: currentLeft } = _el.getBoundingClientRect();
  const { left: parentLeft } = refIndicator.value!.parentElement!.getBoundingClientRect();
  if (refIndicator && refIndicator.value) {
    refIndicator.value.style.width = _el.clientWidth + 'px';
    refIndicator.value.style.left = currentLeft - parentLeft + 'px';
  }
})

</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.cs-tabs {
  &-nav {
    display: flex;
    position: relative;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100px;
      border-bottom: 2px solid $blue;
      transition: all 250ms;
    }

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>