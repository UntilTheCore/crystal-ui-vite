import { createApp } from "vue";
import "@/assets/style/index.scss";
import "@/lib/style/crystal.scss";
import App from "@/App.vue";
import router from "@/router";
import "github-markdown-css";

const app = createApp(App);
app.use(router);
app.mount("#app");
