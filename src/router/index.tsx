import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Doc from "@/views/Doc.vue";
import Switch from "@/views/doc/Switch.vue";
import Button from "@/views/doc/Button.vue";

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
          path: "switch",
          component: Switch,
        },
      ],
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "button",
          component: Button,
        },
      ],
    },
  ],
});

export default router;
