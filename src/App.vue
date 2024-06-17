<template>
  <div :class="{ dark: isDark }">
    <div class="bg-gray-50 px-8 text-3xl text-gray-950 dark:bg-gray-900 dark:text-gray-50">
      <header class="text-inherit bg-stone-50 dark:bg-gray-800 dark:text-inherit">
        <NavBar />
      </header>
      <main class="pt-20 h-screen text-inherit bg-inherit dark:bg-inherit dark:text-inherit">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { isDark } from "./main"
</script>
