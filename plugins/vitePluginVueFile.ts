import { Plugin } from "vite";
import { baseParse } from "@vue/compiler-core";
import fs from "fs";

export default function (): Plugin {
  return {
    name: "vite-plugin-vue-file",
    transform(code, id) {
      if (/vue&type=demo/.test(id)) {
        const path = id.split("?")[0];
        const file = fs.readFileSync(path).toString();
        const parsed = baseParse(file).children.find(
          (n: any) => n.tag === "demo"
        );

        const main = file.split(parsed.loc.source).join("").trim();

        return `export default component => {
          component.__sourceTitle = ${JSON.stringify(code)}
          component.__sourceCode = ${JSON.stringify(main)}
        }`.trim();
      }
    },
  };
}
