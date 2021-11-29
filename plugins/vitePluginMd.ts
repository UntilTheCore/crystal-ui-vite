// @ts-nocheck
import path from "path";
import fs from "fs";
import { marked } from "marked";
import { Plugin } from "vite";

const mdToJs = (str: string) => {
  const content = JSON.stringify(marked.parse(str));
  return `export default ${content}`;
};

// vite-plugin-md
export function vitePluginMd(): Plugin {
  return {
    name: "vite-plugin-md",
    // 用于开发
    configureServer: ({ middlewares }) => {
      middlewares.use((req, res, next) => {
        if (req.url.includes(".md?import")) {
          const filePath = path.join(process.cwd(), req.url.split("?")[0]);
          const content = mdToJs(fs.readFileSync(filePath).toString());
          res.writeHead(200, {
            "Content-Type": "text/javascript; charset=utf-8",
          });
          res.end(content);
        } else {
          next();
        }
      });
    },
    transform(code, id) {
      if (id.endsWith(".md")) {
        return mdToJs(code);
      }
    },
  };
}
