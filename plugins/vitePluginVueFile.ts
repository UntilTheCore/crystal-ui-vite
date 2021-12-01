import { Plugin } from "vite";
import { baseParse } from "@vue/compiler-core";
import fs from "fs";

export default function (): Plugin {
  return {
    name: "vite-plugin-vue-file",
/*     transform(code, id) {
      if (id.endsWith(".vue") && id.includes("views/doc/component")) {
        const file = fs.readFileSync(id).toString();
        const parsed = baseParse(file).children.find(
          (n: any) => n.tag === "demo"
        );
        console.log(parsed);

        if (parsed) {
          const title = (parsed as any).children[0].content;
          const main = file.split(parsed.loc.source).join("").trim();
          return `export default function(Component) {
            Component.__sourceCode = ${JSON.stringify(main)}
              Component.__sourceCodeTitle = ${JSON.stringify(title)}
          }`;
        }
      }
    }, */
        transform(code, id) {
      if (!/vue&type=demo/.test(id)) {
        return;
      }
      if (/\.ya?ml$/.test(id)) {
        code = JSON.stringify(require("js-yaml").safeLoad(code.trim()));
      }
      console.log("return code--------------");
      console.log(code);
      console.log("return code--------------");

      return `export default Comp => {
        Comp.demo = ${code}
      }`;
    },
  };
}
