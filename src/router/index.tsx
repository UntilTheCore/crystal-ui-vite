import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Doc from "@/views/Doc.vue";
import DocIndex from "@/views/doc/index.vue";
import Switch from "@/views/doc/SwitchDemo.vue";
import Button from "@/views/doc/ButtonDemo.vue";
import Dialog from "@/views/doc/DialogDemo.vue";
import Tabs from "@/views/doc/TabsDemo.vue";
import Intro from "@/views/doc/intro/index.vue";
import GetStart from "@/views/doc/Intro/GetStart.vue";
import Install from "@/views/doc/Intro/Install.vue";

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
