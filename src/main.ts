import "./styles.css";

import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";

import type { Ref } from "vue";

export const isDark: Ref<boolean> = ref(true);
// toggle value of isDark variable
export const toggleIsDark = () => {
  isDark.value = !isDark.value;
};

const app = createApp(App);

app.use(router);

app.mount("#app");
