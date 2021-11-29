import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { vitePluginMd } from "./plugins/vitePluginMd";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginMd()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
