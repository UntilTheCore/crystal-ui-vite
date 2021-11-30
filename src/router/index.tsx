import { createWebHashHistory, createRouter } from "vue-router";
import { h } from "vue";
import Home from "@/views/Home.vue";
import Doc from "@/views/Doc.vue";
import DocIndex from "@/views/doc/index.vue";
import Switch from "@/views/doc/component/SwitchDemo.vue";
import Button from "@/views/doc/component/ButtonDemo.vue";
import Dialog from "@/views/doc/component/DialogDemo.vue";
import Tabs from "@/views/doc/component/TabsDemo.vue";
import Markdown from "@/components/Markdown.vue";

const markdown = (filename: string) => {
  return h(Markdown, { filename, key: filename });
};

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "",
          component: DocIndex,
        },
        {
          path: "intro",
          component: markdown("intro"),
        },
        {
          path: "get-start",
          component: markdown("get-start"),
        },
        {
          path: "install",
          component: markdown("install"),
        },
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Button,
        },
        {
          path: "dialog",
          component: Dialog,
        },
        {
          path: "tabs",
          component: Tabs,
        },
      ],
    },
  ],
});

export default router;
