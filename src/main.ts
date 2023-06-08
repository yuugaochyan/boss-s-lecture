import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-table.css";
import "element-plus/theme-chalk/el-tag.css";


const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.component("vChart", ECharts);

// app.provide("$cookies", VueCookies);

app.mount("#app");
import { ElMessage } from "element-plus";
app.component(ElMessage.name, ElMessage);

// export const BASE_URL = "/dev-api";
// console.log("base", import.meta.env.NODE_ENV);

export const BASE_URL =
  // || "http://api.clinical.ecustnlplab.com/v1";
  // || "http://10.20.3.4/v1";
  // || "http://172.20.137.83:18080/v1"
  // || "api"
  "http://127.0.0.1:8080";
