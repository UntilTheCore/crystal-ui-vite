import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Doc from "@/views/Doc.vue";
import DocIndex from "@/views/doc/index.vue";
import Switch from "@/views/doc/SwitchDemo.vue";
import Button from "@/views/doc/ButtonDemo.vue";
import Dialog from "@/views/doc/DialogDemo.vue";
import Tabs from "@/views/doc/Tabs.vue";

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
