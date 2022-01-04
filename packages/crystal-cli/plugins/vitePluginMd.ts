import { marked } from "marked";
import { Plugin } from "vite";

const mdToJs = (str: string) => {
  const content = JSON.stringify(marked.parse(str));
  return `export default ${content}`;
};

export function vitePluginMd(): Plugin {
  return {
    name: "vite-plugin-md",
    transform(code, id) {
      if (id.endsWith(".md")) {
        return mdToJs(code);
      }
    },
  };
}
