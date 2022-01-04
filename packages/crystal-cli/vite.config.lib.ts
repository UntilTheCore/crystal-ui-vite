import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { vitePluginMd } from "./plugins/vitePluginMd";
import vitePluginVueFile from "./plugins/vitePluginVueFile";

export default defineConfig({
  plugins: [vue(), vitePluginMd(), vitePluginVueFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "vue-crystal-ui",
      fileName: (format) => `vue-crystal-ui.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
        dir: "lib",
      },
    },
  },
});
