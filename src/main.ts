import { createApp } from "vue";
import "@/assets/style/index.scss";
import "@/assets/style/global.scss";
import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
