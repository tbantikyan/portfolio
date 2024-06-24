<template>
  <div :class="{ dark: isDark }" class="w-screen">
    <div
      class="bg-stone-50 px-8 text-3xl text-neutral-950 dark:bg-neutral-900 dark:text-zinc-50"
    >
      <header class="bg-inherit text-inherit dark:bg-inherit dark:text-inherit">
        <NavBar />
      </header>
      <main
        class="min-h-screen bg-inherit pt-24 text-inherit dark:bg-inherit dark:text-inherit sm:pt-20"
      >
        <RouterView />
      </main>
      <footer class="flex h-10 place-items-end text-xs md:h-20 lg:text-sm">
        <p class="mx-auto pb-5">© 2024 Tigran Bantikyan</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { isDark } from "./main";

onMounted(() => {
  // check local storage for isDark value
  const cachedIsDark = localStorage.getItem("isDark");
  if (cachedIsDark) {
    isDark.value = JSON.parse(cachedIsDark);
  }
});
</script>
