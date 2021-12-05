<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>{{ Switch1Demo.__sourceTitle }}</h2>
      <div class="demo-component">
        <Switch1Demo />
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')" />
      </div>
    </div>
    <div class="demo">
      <h2>{{ Switch2Demo.__sourceTitle }}</h2>
      <div class="demo-component">
        <Switch2Demo />
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch1Demo from './Switch1Demo.vue';
import Switch2Demo from './Switch2Demo.vue';
import Prism from 'prismjs';
// 暗色主题
// import "prismjs/themes/prism-okaidia.css";
import "prismjs/themes/prism.css";

</script>


<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>