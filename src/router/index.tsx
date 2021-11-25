import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Doc from "@/views/Doc.vue";
import DocIndex from "@/views/doc/index.vue";
import Switch from "@/views/doc/component/SwitchDemo.vue";
import Button from "@/views/doc/component/ButtonDemo.vue";
import Dialog from "@/views/doc/component/DialogDemo.vue";
import Tabs from "@/views/doc/component/TabsDemo.vue";
import Intro from "@/views/doc/document/index.vue";
import GetStart from "@/views/doc/document/GetStart.vue";
import Install from "@/views/doc/document/Install.vue";

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
          component: Intro,
        },
        {
          path: "get-start",
          component: GetStart,
        },
        {
          path: "install",
          component: Install,
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
