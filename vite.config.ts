import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { vitePluginMd } from "./plugins/vitePluginMd";
import vitePluginVueFile from "./plugins/vitePluginVueFile";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginMd(), vitePluginVueFile(), Inspect()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: './',
});
