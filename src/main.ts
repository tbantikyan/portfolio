import "./styles.css";

import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";

import InlineSvg from "vue-inline-svg";

import type { Ref } from "vue";

export const isDark: Ref<boolean> = ref(true);
// toggle value of isDark variable

const app = createApp(App);
app.use(router);
app.component("inline-svg", InlineSvg);
app.mount("#app");
